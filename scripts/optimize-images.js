#!/usr/bin/env node

const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// Bildoptimierungs-Script für Dr. Schirmer Website
// Konvertiert alle JPG-Bilder zu WebP und AVIF in verschiedenen Größen

const inputDir = path.join(__dirname, '../public/images');
const outputDir = path.join(__dirname, '../public/images/optimized');

// Responsive Größen für verschiedene Breakpoints
const sizes = [
  { width: 320, suffix: '320w' },   // Mobile Small
  { width: 640, suffix: '640w' },   // Mobile Large
  { width: 960, suffix: '960w' },    // Tablet
  { width: 1280, suffix: '1280w' }, // Desktop Small
  { width: 1920, suffix: '1920w' }  // Desktop Large
];

// Qualitätseinstellungen
const webpQuality = 80;
const avifQuality = 75;

// Erstelle Output-Verzeichnis falls es nicht existiert
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

async function optimizeImage(imagePath) {
  const fileName = path.basename(imagePath, path.extname(imagePath));
  const ext = path.extname(imagePath);
  
  console.log(`🖼️  Optimizing: ${fileName}${ext}`);
  
  try {
    // Lade das Original-Bild
    const image = sharp(imagePath);
    const metadata = await image.metadata();
    
    console.log(`   Original: ${metadata.width}x${metadata.height}, ${Math.round(fs.statSync(imagePath).size / 1024)}KB`);
    
    // Erstelle WebP-Varianten
    for (const size of sizes) {
      const outputPath = path.join(outputDir, `${fileName}-${size.suffix}.webp`);
      
      await image
        .resize(size.width, null, {
          withoutEnlargement: true,
          fit: 'inside'
        })
        .webp({ quality: webpQuality })
        .toFile(outputPath);
      
      const outputSize = Math.round(fs.statSync(outputPath).size / 1024);
      console.log(`   ✅ WebP ${size.suffix}: ${outputSize}KB`);
    }
    
    // Erstelle AVIF-Varianten
    for (const size of sizes) {
      const outputPath = path.join(outputDir, `${fileName}-${size.suffix}.avif`);
      
      await image
        .resize(size.width, null, {
          withoutEnlargement: true,
          fit: 'inside'
        })
        .avif({ quality: avifQuality })
        .toFile(outputPath);
      
      const outputSize = Math.round(fs.statSync(outputPath).size / 1024);
      console.log(`   ✅ AVIF ${size.suffix}: ${outputSize}KB`);
    }
    
    // Erstelle auch eine optimierte JPG-Version als Fallback
    const fallbackPath = path.join(outputDir, `${fileName}-fallback.jpg`);
    await image
      .jpeg({ quality: 85 })
      .toFile(fallbackPath);
    
    const fallbackSize = Math.round(fs.statSync(fallbackPath).size / 1024);
    console.log(`   ✅ JPG Fallback: ${fallbackSize}KB`);
    
  } catch (error) {
    console.error(`❌ Error optimizing ${fileName}:`, error.message);
  }
}

async function optimizeAllImages() {
  console.log('🚀 Starting image optimization for Dr. Schirmer website...\n');
  
  try {
    const files = fs.readdirSync(inputDir);
    const imageFiles = files.filter(file => 
      /\.(jpg|jpeg|png)$/i.test(file) && 
      !file.includes('optimized') &&
      !file.includes('fallback')
    );
    
    console.log(`📁 Found ${imageFiles.length} images to optimize:`);
    imageFiles.forEach(file => console.log(`   - ${file}`));
    console.log('');
    
    for (const file of imageFiles) {
      const imagePath = path.join(inputDir, file);
      await optimizeImage(imagePath);
      console.log('');
    }
    
    console.log('🎉 Image optimization completed!');
    console.log(`📊 Optimized images saved to: ${outputDir}`);
    
    // Erstelle eine JSON-Datei mit Metadaten für die Website
    const metadata = {
      generated: new Date().toISOString(),
      totalImages: imageFiles.length,
      formats: ['webp', 'avif', 'jpg'],
      sizes: sizes.map(s => s.suffix),
      quality: {
        webp: webpQuality,
        avif: avifQuality,
        jpg: 85
      }
    };
    
    fs.writeFileSync(
      path.join(outputDir, 'metadata.json'), 
      JSON.stringify(metadata, null, 2)
    );
    
    console.log('📋 Metadata saved to metadata.json');
    
  } catch (error) {
    console.error('❌ Error during optimization:', error);
    process.exit(1);
  }
}

// Führe die Optimierung aus
optimizeAllImages();
