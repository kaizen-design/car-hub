/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['cdn.imagin.studio'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.imagin.studio',
        port: ''
      }
    ]
  }
};

module.exports = nextConfig
