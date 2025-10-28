#!/bin/bash

# Auto-rebuild script for Dr. Schirmer CMS
# This script rebuilds the static website after content changes

echo "🚀 Starting auto-rebuild process..."

# 1. Clean previous build
echo "🧹 Cleaning previous build..."
rm -rf out/
rm -rf .next/

# 2. Build the project
echo "🔨 Building project..."
npm run build

# 3. Verify build
if [ ! -d "out" ]; then
    echo "❌ Build failed - no 'out' directory found"
    exit 1
fi

echo "✅ Auto-rebuild completed successfully!"
echo "📋 Changes are now live for all users"
