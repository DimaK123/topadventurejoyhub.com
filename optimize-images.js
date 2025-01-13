import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const inputDir = './src/images/src';
const outputDir = './src/images/optimized';

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

fs.readdirSync(inputDir).forEach((file) => {
  const inputFilePath = path.join(inputDir, file);
  const outputFilePath = path.join(outputDir, `${path.parse(file).name}.avif`);

  // Конвертация в формат AVIF
  sharp(inputFilePath)
    .toFormat('avif', { quality: 50 }) // Конвертируем в AVIF с качеством 50
    .toFile(outputFilePath)
    .then(() => console.log(`Converted to AVIF: ${file}`))
    .catch((err) => console.error(`Error processing ${file}:`, err));
});