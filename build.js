import fs from 'fs';
import path from 'path';

const distDir = path.resolve('dist');

// Create dist directory
if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir, { recursive: true });
}

// Copy index.html to dist
if (fs.existsSync('index.html')) {
  fs.copyFileSync('index.html', path.join(distDir, 'index.html'));
  console.log('✅ Copied index.html -> dist/index.html');
}

// Copy assets directory to dist/assets
if (fs.existsSync('assets')) {
  fs.cpSync('assets', path.join(distDir, 'assets'), { recursive: true });
  console.log('✅ Copied assets/ -> dist/assets/');
}

console.log('🚀 Production dist build completed successfully for Vercel!');
