// Builds the social share image and app icons in public/.
// Run once after changing the design: node scripts/make-images.mjs
import sharp from 'sharp';
import { writeFile } from 'node:fs/promises';

const og = `
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630">
  <defs>
    <radialGradient id="g" cx="50%" cy="0%" r="90%">
      <stop offset="0" stop-color="#4ade80" stop-opacity=".16"/>
      <stop offset="1" stop-color="#0a0e0c" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="1200" height="630" fill="#0a0e0c"/>
  <rect width="1200" height="630" fill="url(#g)"/>
  <g font-family="Consolas, 'IBM Plex Mono', monospace">
    <text x="80" y="120" font-size="30" fill="#8a9c94"><tspan fill="#4ade80">lint@gwalior</tspan>:~$ whoami</text>
    <text x="80" y="260" font-size="84" font-weight="700" fill="#d6e2da">We break systems</text>
    <text x="80" y="360" font-size="84" font-weight="700" fill="#d6e2da">to <tspan fill="#4ade80">understand</tspan> them.</text>
    <text x="80" y="450" font-size="32" fill="#8a9c94">Security R&amp;D · reverse engineering · secure systems</text>
    <rect x="80" y="510" width="1040" height="2" fill="#1e2a24"/>
    <text x="80" y="570" font-size="34" font-weight="700" fill="#d6e2da">&gt; <tspan fill="#4ade80">LINT</tspan>_</text>
    <text x="1120" y="570" font-size="28" fill="#8a9c94" text-anchor="end">lintlab.in · Gwalior, India</text>
  </g>
</svg>`;

const icon = (size) => `
<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 64 64">
  <rect width="64" height="64" fill="#0a0e0c"/>
  <path d="M14 20l12 12-12 12" fill="none" stroke="#4ade80" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/>
  <rect x="32" y="40" width="18" height="6" rx="2" fill="#4ade80"/>
</svg>`;

// The owner's logo (public/brand/lint-logo.png), trimmed to the wordmark.
const LOGO = 'public/brand/lint-logo.png';
const BG = { r: 15, g: 15, b: 15, alpha: 1 };
const wordmark = await sharp(LOGO).trim({ threshold: 20 }).png().toBuffer();

// Header/footer wordmark: white letters on a transparent background.
// The logo's brightness becomes the alpha channel, so it sits on any dark colour.
const { data: alpha, info } = await sharp(wordmark).resize({ height: 96 }).greyscale().raw().toBuffer({ resolveWithObject: true });
await sharp({ create: { width: info.width, height: info.height, channels: 3, background: '#ffffff' } })
  .joinChannel(alpha, { raw: { width: info.width, height: info.height, channels: 1 } })
  .png().toFile('public/brand/lint-wordmark.png');

// Share image: the text design above, with the real logo bottom-left
const ogLogo = await sharp(wordmark).resize({ height: 64 }).png().toBuffer();
await sharp(Buffer.from(og.replace(/<text x="80" y="570"[^]*?<\/text>/, '')))
  .composite([{ input: ogLogo, left: 80, top: 528 }])
  .png().toFile('public/og.png');

// App icons: the wordmark centred on a square with some breathing room
for (const [name, size] of [['icon-192.png', 192], ['icon-512.png', 512], ['apple-touch-icon.png', 180]]) {
  const inner = await sharp(wordmark).resize({ width: Math.round(size * 0.78) }).png().toBuffer();
  await sharp({ create: { width: size, height: size, channels: 4, background: BG } })
    .composite([{ input: inner, gravity: 'centre' }])
    .png().toFile(`public/${name}`);
}
// favicon.ico: a 32x32 PNG wrapped in a minimal ICO header
const png = await sharp(Buffer.from(icon(32))).png().toBuffer();
const header = Buffer.alloc(22);
header.writeUInt16LE(0, 0); header.writeUInt16LE(1, 2); header.writeUInt16LE(1, 4);
header.writeUInt8(32, 6); header.writeUInt8(32, 7); header.writeUInt16LE(1, 10); header.writeUInt16LE(32, 12);
header.writeUInt32LE(png.length, 14); header.writeUInt32LE(22, 18);
await writeFile('public/favicon.ico', Buffer.concat([header, png]));
console.log('images written to public/');
