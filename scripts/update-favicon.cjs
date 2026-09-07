const fs = require('fs');
const path = require('path');

const logoBuffer = fs.readFileSync(path.join(__dirname, '../public/logo.png'));
const b64 = logoBuffer.toString('base64');

// Create favicon.svg with dark backdrop rounded square and the SR logo
const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500">
  <rect width="500" height="500" rx="100" fill="#121212" />
  <image href="data:image/png;base64,${b64}" width="500" height="500" />
</svg>
`;

fs.writeFileSync(path.join(__dirname, '../public/favicon.svg'), svgContent);
console.log('Successfully updated public/favicon.svg with embedded SR logo');
