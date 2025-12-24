import type { NextConfig } from 'next'

const isProduction = process.env.NODE_ENV === 'production'
const basePath = isProduction ? '/BinMujeeb' : ''

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: basePath,
  assetPrefix: basePath,
  // Skip API routes during static export
  trailingSlash: true,
}

export default nextConfig




