import * as THREE from 'three';

/**
 * Creates high-DPI canvas textures for holographic code cards and data streams.
 * Completely offline with zero external font or network dependencies.
 */

function roundRect(ctx, x, y, width, height, radius) {
  ctx.beginPath();
  ctx.moveTo(x + radius, y);
  ctx.lineTo(x + width - radius, y);
  ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
  ctx.lineTo(x + width, y + height - radius);
  ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
  ctx.lineTo(x + radius, y + height);
  ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
  ctx.lineTo(x, y + radius);
  ctx.quadraticCurveTo(x, y, x + radius, y);
  ctx.closePath();
}

/**
 * Creates the Terminal Holographic Card Texture
 */
export function createTerminalTexture() {
  const canvas = document.createElement('canvas');
  canvas.width = 512;
  canvas.height = 256;
  const ctx = canvas.getContext('2d');

  // Background
  ctx.fillStyle = '#161616';
  roundRect(ctx, 4, 4, 504, 248, 16);
  ctx.fill();

  // Border with cyan glow
  ctx.strokeStyle = '#00E5FF';
  ctx.lineWidth = 3;
  roundRect(ctx, 4, 4, 504, 248, 16);
  ctx.stroke();

  // Window header bar
  ctx.fillStyle = '#1F1F1F';
  roundRect(ctx, 4, 4, 504, 38, 16);
  ctx.fill();

  // Window dots
  ctx.fillStyle = '#EF4444';
  ctx.beginPath(); ctx.arc(24, 23, 6, 0, Math.PI * 2); ctx.fill();
  ctx.fillStyle = '#FACC15';
  ctx.beginPath(); ctx.arc(42, 23, 6, 0, Math.PI * 2); ctx.fill();
  ctx.fillStyle = '#00F5A0';
  ctx.beginPath(); ctx.arc(60, 23, 6, 0, Math.PI * 2); ctx.fill();

  // Window Title
  ctx.fillStyle = '#94A3B8';
  ctx.font = 'bold 14px "JetBrains Mono", monospace';
  ctx.fillText('bash — sameer@universe:~', 82, 28);

  // Terminal Lines
  ctx.font = '16px "JetBrains Mono", monospace';

  // Line 1
  ctx.fillStyle = '#00E5FF';
  ctx.fillText('$ git push origin main', 24, 76);

  // Line 2
  ctx.fillStyle = '#94A3B8';
  ctx.fillText('Enumerating objects: 104, done.', 24, 110);

  // Line 3
  ctx.fillStyle = '#00F5A0';
  ctx.fillText('✓ [main 8f3c1a] feat: living code universe', 24, 144);

  // Line 4
  ctx.fillStyle = '#FACC15';
  ctx.fillText('⚡ Deployed to edge network in 140ms', 24, 178);

  // Line 5: Prompt cursor
  ctx.fillStyle = '#00E5FF';
  ctx.fillText('>_ ready for next mission', 24, 214);
  ctx.fillRect(270, 200, 10, 16);

  const texture = new THREE.CanvasTexture(canvas);
  texture.minFilter = THREE.LinearFilter;
  texture.magFilter = THREE.LinearFilter;
  return texture;
}

/**
 * Creates React State / Logic Holographic Card Texture
 */
export function createLogicCardTexture() {
  const canvas = document.createElement('canvas');
  canvas.width = 512;
  canvas.height = 256;
  const ctx = canvas.getContext('2d');

  ctx.fillStyle = '#161616';
  roundRect(ctx, 4, 4, 504, 248, 16);
  ctx.fill();

  ctx.strokeStyle = '#00F5A0';
  ctx.lineWidth = 3;
  roundRect(ctx, 4, 4, 504, 248, 16);
  ctx.stroke();

  // Header
  ctx.fillStyle = '#1F1F1F';
  roundRect(ctx, 4, 4, 504, 38, 16);
  ctx.fill();

  ctx.fillStyle = '#00F5A0';
  ctx.font = 'bold 14px "JetBrains Mono", monospace';
  ctx.fillText('// React.Engine.jsx', 24, 28);

  ctx.fillStyle = '#FACC15';
  ctx.fillText('LIVE_STATE', 400, 28);

  // Code body
  ctx.font = '16px "JetBrains Mono", monospace';

  ctx.fillStyle = '#38BDF8';
  ctx.fillText('const', 24, 78);
  ctx.fillStyle = '#FFFFFF';
  ctx.fillText(' [ideas, build] = ', 75, 78);
  ctx.fillStyle = '#00F5A0';
  ctx.fillText('useState', 228, 78);
  ctx.fillStyle = '#FFFFFF';
  ctx.fillText('(true);', 305, 78);

  ctx.fillStyle = '#94A3B8';
  ctx.fillText('// Continuous creative iteration loop', 24, 114);

  ctx.fillStyle = '#38BDF8';
  ctx.fillText('useEffect', 24, 150);
  ctx.fillStyle = '#FFFFFF';
  ctx.fillText('(() => {', 108, 150);

  ctx.fillStyle = '#00E5FF';
  ctx.fillText('  exploreNextDimension();', 24, 184);

  ctx.fillStyle = '#FFFFFF';
  ctx.fillText('}, [passion]);', 24, 218);

  const texture = new THREE.CanvasTexture(canvas);
  texture.minFilter = THREE.LinearFilter;
  texture.magFilter = THREE.LinearFilter;
  return texture;
}

/**
 * Creates System Metrics / Algorithm Complexity Card Texture
 */
export function createMetricsCardTexture() {
  const canvas = document.createElement('canvas');
  canvas.width = 512;
  canvas.height = 256;
  const ctx = canvas.getContext('2d');

  ctx.fillStyle = '#161616';
  roundRect(ctx, 4, 4, 504, 248, 16);
  ctx.fill();

  ctx.strokeStyle = '#FACC15';
  ctx.lineWidth = 2.5;
  roundRect(ctx, 4, 4, 504, 248, 16);
  ctx.stroke();

  // Header
  ctx.fillStyle = '#1F1F1F';
  roundRect(ctx, 4, 4, 504, 38, 16);
  ctx.fill();

  ctx.fillStyle = '#FACC15';
  ctx.font = 'bold 14px "JetBrains Mono", monospace';
  ctx.fillText('ALGORITHM::RUNTIME_TELEMETRY', 24, 28);

  ctx.font = '16px "JetBrains Mono", monospace';

  ctx.fillStyle = '#94A3B8';
  ctx.fillText('Time Complexity:', 24, 80);
  ctx.fillStyle = '#00F5A0';
  ctx.fillText('O(log n) // Binary Search', 200, 80);

  ctx.fillStyle = '#94A3B8';
  ctx.fillText('Space Overhead:', 24, 118);
  ctx.fillStyle = '#00E5FF';
  ctx.fillText('O(1) // Constant Space', 200, 118);

  ctx.fillStyle = '#94A3B8';
  ctx.fillText('Graph Connectivity:', 24, 156);
  ctx.fillStyle = '#FFFFFF';
  ctx.fillText('Acyclic DAG (Synchronized)', 200, 156);

  ctx.fillStyle = '#00F5A0';
  ctx.fillText('● SYSTEM STATUS: OPTIMAL (60 FPS)', 24, 204);

  const texture = new THREE.CanvasTexture(canvas);
  texture.minFilter = THREE.LinearFilter;
  texture.magFilter = THREE.LinearFilter;
  return texture;
}

/**
 * Creates an Orbiting Repeating Code Strip for 3D ribbons
 */
export function createOrbitingCodeStripTexture() {
  const canvas = document.createElement('canvas');
  canvas.width = 1024;
  canvas.height = 128;
  const ctx = canvas.getContext('2d');

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Background subtle band
  ctx.fillStyle = 'rgba(22, 22, 22, 0.75)';
  ctx.fillRect(0, 16, 1024, 96);

  ctx.strokeStyle = 'rgba(0, 229, 255, 0.4)';
  ctx.lineWidth = 2;
  ctx.strokeRect(0, 16, 1024, 96);

  ctx.font = 'bold 22px "JetBrains Mono", monospace';
  ctx.fillStyle = '#00E5FF';

  const codePhrase = '✦ const app = dev()  //  while(alive) { build(); }  //  <SameerRaj />  //  git push origin main  //  O(1) MEMORY  ';
  ctx.fillText(codePhrase, 20, 72);

  const texture = new THREE.CanvasTexture(canvas);
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.ClampToEdgeWrapping;
  texture.repeat.set(2, 1);
  return texture;
}

/**
 * Creates an Orbiting Repeating Binary Strip for tilted ribbons
 */
export function createOrbitingBinaryStripTexture() {
  const canvas = document.createElement('canvas');
  canvas.width = 1024;
  canvas.height = 128;
  const ctx = canvas.getContext('2d');

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = 'rgba(22, 22, 22, 0.75)';
  ctx.fillRect(0, 16, 1024, 96);

  ctx.strokeStyle = 'rgba(0, 245, 160, 0.4)';
  ctx.lineWidth = 2;
  ctx.strokeRect(0, 16, 1024, 96);

  ctx.font = 'bold 20px "JetBrains Mono", monospace';
  ctx.fillStyle = '#00F5A0';

  const binaryPhrase = '01000011 01101111 01100100 01100101 00100000 01010101 01101110 01101001 01110110 01100101 01110010 01110011 01100101';
  ctx.fillText(binaryPhrase, 20, 72);

  const texture = new THREE.CanvasTexture(canvas);
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.ClampToEdgeWrapping;
  texture.repeat.set(2, 1);
  return texture;
}

/**
 * Creates Syntax Token Badges for floating 3D chips
 */
export function createTokenTexture(token, color = '#00E5FF') {
  const canvas = document.createElement('canvas');
  canvas.width = 128;
  canvas.height = 128;
  const ctx = canvas.getContext('2d');

  ctx.fillStyle = '#161616';
  roundRect(ctx, 4, 4, 120, 120, 24);
  ctx.fill();

  ctx.strokeStyle = color;
  ctx.lineWidth = 4;
  roundRect(ctx, 4, 4, 120, 120, 24);
  ctx.stroke();

  ctx.fillStyle = color;
  ctx.font = 'bold 44px "JetBrains Mono", monospace';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(token, 64, 66);

  const texture = new THREE.CanvasTexture(canvas);
  texture.minFilter = THREE.LinearFilter;
  texture.magFilter = THREE.LinearFilter;
  return texture;
}
