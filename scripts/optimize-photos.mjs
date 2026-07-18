/**
 * One-shot: rename + optimize field photos into public/images (AVIF + WebP).
 */
import sharp from 'sharp';
import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');
const assets =
  'C:/Users/PC/.cursor/projects/c-Users-PC-Projects-mobil-klime/assets';
const outDir = path.join(root, 'public', 'images');

const jobs = [
  {
    src: path.join(
      assets,
      'c__Users_PC_AppData_Roaming_Cursor_User_workspaceStorage_empty-window_images_ChatGPT_Image_Jul_18__2026__11_14_16_AM__1_-a5d5f29e-8c92-4c19-98ca-8874fef7c75a.png'
    ),
    base: 'dijagnostika-na-terenu',
    width: 1200,
    label: 'PHOTO_WORK_2',
  },
  {
    src: path.join(
      assets,
      'c__Users_PC_AppData_Roaming_Cursor_User_workspaceStorage_empty-window_images_ChatGPT_Image_Jul_18__2026__11_14_17_AM__2_-e273e550-a59c-42c6-af10-620cc2a8903a.png'
    ),
    base: 'oprema-manometri',
    width: 1200,
    label: 'PHOTO_EQUIPMENT',
  },
  {
    src: path.join(
      assets,
      'c__Users_PC_AppData_Roaming_Cursor_User_workspaceStorage_empty-window_images_ChatGPT_Image_Jul_18__2026__11_14_17_AM__3_-8bff72cd-fe80-4b71-9fd8-8edb1454bd45.png'
    ),
    base: 'servisno-vozilo-teren',
    width: 1200,
    label: 'PHOTO_VEHICLE',
  },
];

await fs.mkdir(outDir, { recursive: true });

for (const job of jobs) {
  const resized = sharp(job.src).rotate().resize({
    width: job.width,
    withoutEnlargement: true,
    fit: 'inside',
  });

  const { width, height } = await resized.clone().toBuffer({ resolveWithObject: true }).then(
    ({ info }) => info
  );

  const webpPath = path.join(outDir, `${job.base}.webp`);
  const avifPath = path.join(outDir, `${job.base}.avif`);

  await resized.clone().webp({ quality: 78, effort: 5 }).toFile(webpPath);
  await resized.clone().avif({ quality: 50, effort: 4 }).toFile(avifPath);

  const webpKb = ((await fs.stat(webpPath)).size / 1024).toFixed(1);
  const avifKb = ((await fs.stat(avifPath)).size / 1024).toFixed(1);

  console.log(
    `${job.base} [${job.label}]: ${width}x${height} | webp ${webpKb} KB | avif ${avifKb} KB`
  );
}
