/**
 * subset-fonts.mjs — rebuild local woff2 files to the glyphs used on the site.
 *
 * Design target: ≤160 KB total for 6 files (docs/DESIGN_SYSTEM.md §4).
 * Source files must already exist in src/assets/fonts/ (latin + latin-ext gwfh).
 *
 * Usage: node scripts/subset-fonts.mjs
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import subsetFont from 'subset-font';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');
const fontsDir = path.join(root, 'src', 'assets', 'fonts');
const htmlPath = path.join(root, 'index.html');

/** Extra glyphs not always present as plain text in index.html (CSS content, UI). */
const EXTRA =
  '0123456789°C→←•·—–…„""\'\'()[]{}@#%&*+=/<>\\|?!.,;:™©' +
  'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz' +
  'ŠĐČĆŽšđčćžÁÉÍÓÚáéíóúÄÖÜäöüß';

const FONTS = [
  'space-grotesk-500.woff2',
  'space-grotesk-700.woff2',
  'inter-400.woff2',
  'inter-600.woff2',
  'ibm-plex-mono-400.woff2',
  'ibm-plex-mono-500.woff2',
];

function uniqueChars(...parts) {
  const set = new Set();
  for (const part of parts) {
    for (const ch of part) {
      if (ch === '\n' || ch === '\r' || ch === '\t') continue;
      set.add(ch);
    }
  }
  return [...set].sort().join('');
}

async function main() {
  const html = fs.readFileSync(htmlPath, 'utf8');
  // Strip tags/scripts so we subset visible copy + attributes still keep Latin letters.
  const textish = html
    .replace(/<script[\s\S]*?<\/script>/gi, ' ')
    .replace(/<style[\s\S]*?<\/style>/gi, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&\w+;/g, ' ');

  const glyphs = uniqueChars(textish, EXTRA);
  console.log(`Glyph count: ${glyphs.length}`);

  let total = 0;
  for (const name of FONTS) {
    const filePath = path.join(fontsDir, name);
    if (!fs.existsSync(filePath)) {
      throw new Error(`Missing font: ${filePath}`);
    }
    const input = fs.readFileSync(filePath);
    const before = input.length;
    const output = await subsetFont(input, glyphs, { targetFormat: 'woff2' });
    fs.writeFileSync(filePath, output);
    total += output.length;
    console.log(
      `${name}: ${(before / 1024).toFixed(1)} KB → ${(output.length / 1024).toFixed(1)} KB`
    );
  }

  console.log(`Total: ${(total / 1024).toFixed(1)} KB (target ≤160 KB)`);
  if (total > 160 * 1024) {
    console.warn('WARNING: still over 160 KB budget');
    process.exitCode = 1;
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
