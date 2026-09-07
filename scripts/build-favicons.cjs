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

function renderIcon(srcPx, srcW, srcH, targetSize) {
  const out = new Uint8Array(targetSize * targetSize * 4);
  const cx = 248.5;
  const cy = 245.5;
  const cropSize = 300; // frames the 220px monogram so it fills ~73% of favicon
  const cropLeft = cx - cropSize / 2;
  const cropTop = cy - cropSize / 2;
  
  const cornerRadius = targetSize * 0.22;
  
  for (let ty = 0; ty < targetSize; ty++) {
    for (let tx = 0; tx < targetSize; tx++) {
      const dstIdx = (ty * targetSize + tx) * 4;
      
      const dx = Math.max(0, Math.max(cornerRadius - tx, tx - (targetSize - 1 - cornerRadius)));
      const dy = Math.max(0, Math.max(cornerRadius - ty, ty - (targetSize - 1 - cornerRadius)));
      const dist = Math.sqrt(dx * dx + dy * dy);
      
      let bgAlpha = 1.0;
      if (dist > cornerRadius) {
        bgAlpha = Math.max(0, 1.0 - (dist - cornerRadius));
      }
      if (bgAlpha <= 0) {
        out[dstIdx + 3] = 0;
        continue;
      }
      
      const sx = cropLeft + (tx / targetSize) * cropSize;
      const sy = cropTop + (ty / targetSize) * cropSize;
      
      let fgR = 0, fgG = 0, fgB = 0, fgA = 0;
      if (sx >= 0 && sx < srcW - 1 && sy >= 0 && sy < srcH - 1) {
        const x0 = Math.floor(sx);
        const y0 = Math.floor(sy);
        const fx = sx - x0;
        const fy = sy - y0;
        
        const idx00 = (y0 * srcW + x0) * 4;
        const idx10 = (y0 * srcW + (x0 + 1)) * 4;
        const idx01 = ((y0 + 1) * srcW + x0) * 4;
        const idx11 = ((y0 + 1) * srcW + (x0 + 1)) * 4;
        
        const w00 = (1 - fx) * (1 - fy);
        const w10 = fx * (1 - fy);
        const w01 = (1 - fx) * fy;
        const w11 = fx * fy;
        
        fgR = srcPx[idx00] * w00 + srcPx[idx10] * w10 + srcPx[idx01] * w01 + srcPx[idx11] * w11;
        fgG = srcPx[idx00+1] * w00 + srcPx[idx10+1] * w10 + srcPx[idx01+1] * w01 + srcPx[idx11+1] * w11;
        fgB = srcPx[idx00+2] * w00 + srcPx[idx10+2] * w10 + srcPx[idx01+2] * w01 + srcPx[idx11+2] * w11;
        fgA = (srcPx[idx00+3] * w00 + srcPx[idx10+3] * w10 + srcPx[idx01+3] * w01 + srcPx[idx11+3] * w11) / 255;
      }
      
      // High-contrast background: #10121A with subtle sleek border
      let bgR = 16, bgG = 18, bgB = 26;
      if (dist >= cornerRadius - 1.5 && dist <= cornerRadius + 0.5) {
        bgR = 80; bgG = 95; bgB = 130;
      }
      
      const outR = Math.round(fgR * fgA + bgR * (1 - fgA));
      const outG = Math.round(fgG * fgA + bgG * (1 - fgA));
      const outB = Math.round(fgB * fgA + bgB * (1 - fgA));
      const outA = Math.round(bgAlpha * 255);
      
      out[dstIdx] = outR;
      out[dstIdx + 1] = outG;
      out[dstIdx + 2] = outB;
      out[dstIdx + 3] = outA;
    }
  }
  return out;
}

const inputBuf = fs.readFileSync(path.join(__dirname, '../public/logo.png'));
const { width: srcW, height: srcH, pixels: srcPx } = parsePNG(inputBuf);

const px192 = renderIcon(srcPx, srcW, srcH, 192);
const png192 = writePNG(192, 192, px192);
fs.writeFileSync(path.join(__dirname, '../public/favicon.png'), png192);

const px180 = renderIcon(srcPx, srcW, srcH, 180);
const png180 = writePNG(180, 180, px180);
fs.writeFileSync(path.join(__dirname, '../public/apple-touch-icon.png'), png180);

const px32 = renderIcon(srcPx, srcW, srcH, 32);
const png32 = writePNG(32, 32, px32);
fs.writeFileSync(path.join(__dirname, '../public/favicon-32x32.png'), png32);

const px16 = renderIcon(srcPx, srcW, srcH, 16);
const png16 = writePNG(16, 16, px16);
fs.writeFileSync(path.join(__dirname, '../public/favicon-16x16.png'), png16);

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
  { width: 32, height: 32, data: png32 },
  { width: 16, height: 16, data: png16 }
]);
fs.writeFileSync(path.join(__dirname, '../public/favicon.ico'), ico);

const b64 = png192.toString('base64');
const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 192">
  <image href="data:image/png;base64,${b64}" width="192" height="192" />
</svg>
`;
fs.writeFileSync(path.join(__dirname, '../public/favicon.svg'), svg);

console.log('Successfully generated all favicons: favicon.png, favicon.ico, favicon-32x32.png, favicon-16x16.png, apple-touch-icon.png, favicon.svg');
