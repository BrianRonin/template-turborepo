/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    emotion: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  experimental: {
    transpilePackages: ['ui'],
  },
}

module.exports = nextConfig
