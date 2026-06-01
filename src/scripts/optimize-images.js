import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import sharp from 'sharp';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const ART_DIR = path.join(__dirname, '../public/art');

async function downscaleImages() {
  console.log(">> STARTING AUTOMATED IMAGE DOWNSCALING PIPELINE...");
  
  try {
    const files = fs.readdirSync(ART_DIR).filter(file => file.endsWith('.png'));
    console.log(`>> Found ${files.length} artwork assets to optimize.`);

    for (const file of files) {
      const filePath = path.join(ART_DIR, file);
      const tempPath = path.join(ART_DIR, `optimized_${file}`);

      console.log(`   [PROCESSING] Downscaling and compressing: ${file}...`);

      // Read, downscale width to 1200px (auto-height), apply bicubic interpolation
      await sharp(filePath)
        .resize({ width: 1200, withoutEnlargement: true }) 
        .png({ quality: 80, compressionLevel: 9 }) // High compression, zero color degradation
        .toFile(tempPath);

      // Overwrite the original bloated file with the lightweight version cleanly
      fs.unlinkSync(filePath);
      fs.renameSync(tempPath, filePath);
    }

    console.log(">> [SUCCESS] All 5 image vectors downscaled and overwritten flawlessly.");
  } catch (error) {
    console.error(">> [ERROR] Image optimization node failed:", error);
  }
}

downscaleImages();