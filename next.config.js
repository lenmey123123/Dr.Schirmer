/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static Export für einfaches Hosting ohne Server
  output: 'export',
  trailingSlash: true,
  
  // Bildoptimierung für Static Export
  images: {
    unoptimized: true,
  },
  
  // Performance-Optimierung
  compress: true,
  poweredByHeader: false,
  
  // Experimentelle Features für bessere Performance
  experimental: {
    optimizeCss: true,
    optimizePackageImports: ['lucide-react', 'framer-motion'],
  },
  
  // Bundle Analyzer Integration
  ...(process.env.ANALYZE === 'true' && {
    webpack: (config) => {
      const { BundleAnalyzerPlugin } = require('@next/bundle-analyzer')({
        enabled: true,
      })
      config.plugins.push(new BundleAnalyzerPlugin())
      return config
    },
  }),
  
  // Headers für bessere Performance und Sicherheit
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
          },
        ],
      },
      {
        source: '/static/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ]
  },
  
  // Redirects für SEO
  async redirects() {
    return [
      {
        source: '/home',
        destination: '/',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig