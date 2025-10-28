#!/bin/bash

# Dr. Schirmer Website Deployment Script
# Für Hostinger Static Hosting

echo "🚀 Starting deployment process..."

# 1. Clean previous build
echo "🧹 Cleaning previous build..."
rm -rf out/
rm -rf .next/

# 2. Install dependencies
echo "📦 Installing dependencies..."
npm ci

# 3. Build the project
echo "🔨 Building project..."
npm run build

# 4. Verify build
if [ ! -d "out" ]; then
    echo "❌ Build failed - no 'out' directory found"
    exit 1
fi

echo "✅ Build completed successfully!"

# 5. Create deployment package
echo "📦 Creating deployment package..."
cd out
tar -czf ../dr-schirmer-website.tar.gz .
cd ..

echo "🎉 Deployment package created: dr-schirmer-website.tar.gz"
echo "📋 Next steps:"
echo "1. Upload dr-schirmer-website.tar.gz to Hostinger"
echo "2. Extract contents to public_html directory"
echo "3. Set up .htaccess for SPA routing (if needed)"
echo "4. Configure SSL certificate"
echo "5. Test website functionality"

echo "🔗 Admin access:"
echo "- URL: https://yourdomain.com/admin"
echo "- Password: drschirmer2024 (change in production!)"
