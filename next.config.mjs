/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: true,
  images: {
    unoptimized: false,
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  compress: true,
  poweredByHeader: false,
  experimental: {
    optimizePackageImports: ['lucide-react', 'framer-motion', '@radix-ui/react-slot'],
  },
  swcMinify: true,
  async headers() {
    const oneYear = 31536000 // 1 year in seconds
    
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on',
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
        ],
      },
      // Static images in public/images folder
      {
        source: '/images/:path*.(jpg|jpeg|png|webp|avif|svg|gif|ico)',
        headers: [
          {
            key: 'Cache-Control',
            value: `public, max-age=${oneYear}, immutable`,
          },
        ],
      },
      // Next.js optimized images
      {
        source: '/_next/image/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: `public, max-age=${oneYear}, immutable`,
          },
        ],
      },
      // Next.js static files
      {
        source: '/_next/static/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: `public, max-age=${oneYear}, immutable`,
          },
        ],
      },
      // Placeholder SVG images
      {
        source: '/placeholder.svg',
        headers: [
          {
            key: 'Cache-Control',
            value: `public, max-age=${oneYear}, immutable`,
          },
        ],
      },
      // Logo and favicon
      {
        source: '/:path*.(ico|png|svg)',
        has: [
          {
            type: 'header',
            key: 'accept',
            value: '(.*image.*)',
          },
        ],
        headers: [
          {
            key: 'Cache-Control',
            value: `public, max-age=${oneYear}, immutable`,
          },
        ],
      },
    ]
  },
}

export default nextConfig
