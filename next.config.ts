import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: process.env.NODE_ENV === 'production' ? '/BinMujeeb' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/BinMujeeb' : '',
}

export default nextConfig




