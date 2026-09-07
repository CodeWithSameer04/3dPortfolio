const fs = require('fs');
const zlib = require('zlib');
const path = require('path');

function parsePNG(buf) {
  let pos = 8;
  let width, height;
  const idats = [];
  while (pos < buf.length) {
    const len = buf.readUInt32BE(pos);
    const type = buf.slice(pos + 4, pos + 8).toString('ascii');
    if (type === 'IHDR') {
      width = buf.readUInt32BE(pos + 8);
      height = buf.readUInt32BE(pos + 12);
    } else if (type === 'IDAT') {
      idats.push(buf.slice(pos + 8, pos + 8 + len));
    }
    pos += 12 + len;
  }
  const decompressed = zlib.inflateSync(Buffer.concat(idats));
  const stride = 1 + width * 4;
  const pixels = new Uint8Array(width * height * 4);
  for (let y = 0; y < height; y++) {
    const lineOffset = y * stride + 1;
    for (let x = 0; x < width; x++) {
      const srcIdx = lineOffset + x * 4;
      const dstIdx = (y * width + x) * 4;
      pixels[dstIdx] = decompressed[srcIdx];
      pixels[dstIdx + 1] = decompressed[srcIdx + 1];
      pixels[dstIdx + 2] = decompressed[srcIdx + 2];
      pixels[dstIdx + 3] = decompressed[srcIdx + 3];
    }
  }
  return { width, height, pixels };
}

function writePNG(width, height, rgba) {
  const stride = 1 + width * 4;
  const raw = Buffer.alloc(stride * height);
  for (let y = 0; y < height; y++) {
    raw[y * stride] = 0;
    for (let x = 0; x < width; x++) {
      const srcIdx = (y * width + x) * 4;
      const dstIdx = y * stride + 1 + x * 4;
      raw[dstIdx] = rgba[srcIdx];
      raw[dstIdx + 1] = rgba[srcIdx + 1];
      raw[dstIdx + 2] = rgba[srcIdx + 2];
      raw[dstIdx + 3] = rgba[srcIdx + 3];
    }
  }
  const idat = zlib.deflateSync(raw);
  
  function chunk(type, data) {
    const len = Buffer.alloc(4);
    len.writeUInt32BE(data.length);
    const typeBuf = Buffer.from(type, 'ascii');
    const crcVal = zlib.crc32(Buffer.concat([typeBuf, data]));
    const crcBuf = Buffer.alloc(4);
    crcBuf.writeUInt32BE(crcVal >>> 0);
    return Buffer.concat([len, typeBuf, data, crcBuf]);
  }
  
  const header = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);
  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(width, 0);
  ihdr.writeUInt32BE(height, 4);
  ihdr[8] = 8;
  ihdr[9] = 6;
  ihdr[10] = 0;
  ihdr[11] = 0;
  ihdr[12] = 0;
  
  return Buffer.concat([
    header,
    chunk('IHDR', ihdr),
    chunk('IDAT', idat),
    chunk('IEND', Buffer.alloc(0))
  ]);
}

// Composite the navbar badge exactly:
// Container: 500x500, rounded-xl (radius 110), bg #16171E (22, 23, 30), border rgba(255,255,255,0.16)
// Inside: original logo with p-1.5 padding (approx 28px inset)
const logoBuffer = fs.readFileSync(path.join(__dirname, '../src/assets/logo.png'));
const { width: W, height: H, pixels: srcPx } = parsePNG(logoBuffer);

const SIZE = 500;
const cornerRadius = 110;
const borderInset = 8;
const borderWidth = 6;
const logoPadding = 28; // gives the exact proportional inset as p-1.5 on w-9 in navbar
const innerSize = SIZE - logoPadding * 2;

const outPx = new Uint8Array(SIZE * SIZE * 4);

for (let y = 0; y < SIZE; y++) {
  for (let x = 0; x < SIZE; x++) {
    const dstIdx = (y * SIZE + x) * 4;

    // Distance to squircle corner
    const dx = Math.max(0, Math.max(cornerRadius - x, x - (SIZE - 1 - cornerRadius)));
    const dy = Math.max(0, Math.max(cornerRadius - y, y - (SIZE - 1 - cornerRadius)));
    const dist = Math.sqrt(dx * dx + dy * dy);

    let containerAlpha = 1.0;
    if (dist > cornerRadius) {
      containerAlpha = Math.max(0, 1.0 - (dist - cornerRadius));
    }

    if (containerAlpha <= 0) {
      outPx[dstIdx + 3] = 0;
      continue;
    }

    // Base background color: #16171E
    let r = 22, g = 23, b = 30;

    // Subtle navbar border: border-white/15
    const edgeDist = Math.abs(dist - cornerRadius);
    if (dist <= cornerRadius && dist >= cornerRadius - borderWidth) {
      const borderFactor = 1.0 - (edgeDist / borderWidth);
      // Blend 18% white
      const borderAlpha = 0.18 * borderFactor;
      r = Math.round(r * (1 - borderAlpha) + 255 * borderAlpha);
      g = Math.round(g * (1 - borderAlpha) + 255 * borderAlpha);
      b = Math.round(b * (1 - borderAlpha) + 255 * borderAlpha);
    }

    // Overlay the logo inside the padded area with bilinear interpolation
    const lx = ((x - logoPadding) / innerSize) * W;
    const ly = ((y - logoPadding) / innerSize) * H;

    if (lx >= 0 && lx < W - 1 && ly >= 0 && ly < H - 1) {
      const x0 = Math.floor(lx);
      const y0 = Math.floor(ly);
      const fx = lx - x0;
      const fy = ly - y0;

      const idx00 = (y0 * W + x0) * 4;
      const idx10 = (y0 * W + (x0 + 1)) * 4;
      const idx01 = ((y0 + 1) * W + x0) * 4;
      const idx11 = ((y0 + 1) * W + (x0 + 1)) * 4;

      const w00 = (1 - fx) * (1 - fy);
      const w10 = fx * (1 - fy);
      const w01 = (1 - fx) * fy;
      const w11 = fx * fy;

      const fgR = srcPx[idx00] * w00 + srcPx[idx10] * w10 + srcPx[idx01] * w01 + srcPx[idx11] * w11;
      const fgG = srcPx[idx00+1] * w00 + srcPx[idx10+1] * w10 + srcPx[idx01+1] * w01 + srcPx[idx11+1] * w11;
      const fgB = srcPx[idx00+2] * w00 + srcPx[idx10+2] * w10 + srcPx[idx01+2] * w01 + srcPx[idx11+2] * w11;
      const fgA = (srcPx[idx00+3] * w00 + srcPx[idx10+3] * w10 + srcPx[idx01+3] * w01 + srcPx[idx11+3] * w11) / 255;

      r = Math.round(fgR * fgA + r * (1 - fgA));
      g = Math.round(fgG * fgA + g * (1 - fgA));
      b = Math.round(fgB * fgA + b * (1 - fgA));
    }

    outPx[dstIdx] = r;
    outPx[dstIdx + 1] = g;
    outPx[dstIdx + 2] = b;
    outPx[dstIdx + 3] = Math.round(containerAlpha * 255);
  }
}

// Write the high-res 500x500 navbar badge PNG
const finalPng = writePNG(SIZE, SIZE, outPx);
fs.writeFileSync(path.join(__dirname, '../public/favicon.png'), finalPng);
fs.writeFileSync(path.join(__dirname, '../public/apple-touch-icon.png'), finalPng);
console.log('Written public/favicon.png and apple-touch-icon.png (exact navbar badge)');

// Write public/favicon.svg embedding the exact navbar badge
const b64 = finalPng.toString('base64');
const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500">
  <image href="data:image/png;base64,${b64}" width="500" height="500" />
</svg>
`;
fs.writeFileSync(path.join(__dirname, '../public/favicon.svg'), svg);
console.log('Written public/favicon.svg');

// Build multi-res ICO (containing a clean downscaled 64x64 and 32x32)
function downscale(src, srcSize, targetSize) {
  const out = new Uint8Array(targetSize * targetSize * 4);
  for (let ty = 0; ty < targetSize; ty++) {
    for (let tx = 0; tx < targetSize; tx++) {
      const dstIdx = (ty * targetSize + tx) * 4;
      const sx0 = Math.floor((tx / targetSize) * srcSize);
      const sx1 = Math.min(srcSize - 1, Math.floor(((tx + 1) / targetSize) * srcSize));
      const sy0 = Math.floor((ty / targetSize) * srcSize);
      const sy1 = Math.min(srcSize - 1, Math.floor(((ty + 1) / targetSize) * srcSize));

      let totalR = 0, totalG = 0, totalB = 0, totalA = 0, count = 0;
      for (let sy = sy0; sy <= sy1; sy++) {
        for (let sx = sx0; sx <= sx1; sx++) {
          const idx = (sy * srcSize + sx) * 4;
          const a = src[idx + 3] / 255;
          totalR += src[idx] * a;
          totalG += src[idx + 1] * a;
          totalB += src[idx + 2] * a;
          totalA += src[idx + 3];
          count++;
        }
      }
      const avgA = totalA / count;
      if (avgA > 0) {
        out[dstIdx] = Math.round(totalR / (totalA / 255));
        out[dstIdx + 1] = Math.round(totalG / (totalA / 255));
        out[dstIdx + 2] = Math.round(totalB / (totalA / 255));
        out[dstIdx + 3] = Math.round(avgA);
      } else {
        out[dstIdx + 3] = 0;
      }
    }
  }
  return writePNG(targetSize, targetSize, out);
}

const png64 = downscale(outPx, SIZE, 64);
const png32 = downscale(outPx, SIZE, 32);

function createIco(images) {
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0);
  header.writeUInt16LE(1, 2);
  header.writeUInt16LE(images.length, 4);
  
  let offset = 6 + images.length * 16;
  const entries = [];
  const buffers = [];
  
  for (const img of images) {
    const entry = Buffer.alloc(16);
    entry.writeUInt8(img.width >= 256 ? 0 : img.width, 0);
    entry.writeUInt8(img.height >= 256 ? 0 : img.height, 1);
    entry.writeUInt8(0, 2);
    entry.writeUInt8(0, 3);
    entry.writeUInt16LE(1, 4);
    entry.writeUInt16LE(32, 6);
    entry.writeUInt32LE(img.data.length, 8);
    entry.writeUInt32LE(offset, 12);
    entries.push(entry);
    buffers.push(img.data);
    offset += img.data.length;
  }
  return Buffer.concat([header, ...entries, ...buffers]);
}

const ico = createIco([
  { width: 64, height: 64, data: png64 },
  { width: 32, height: 32, data: png32 }
]);
fs.writeFileSync(path.join(__dirname, '../public/favicon.ico'), ico);
console.log('Written public/favicon.ico');
