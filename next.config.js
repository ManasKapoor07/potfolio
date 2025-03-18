const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'media.dev.to',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'media2.dev.to',
        pathname: '/**',
      },
    ],
  },
  // Optional: Enable experimental or performance features
  experimental: {
    appDir: true, // Ensure you're using the "app" directory correctly if on Next 13+
  },
  output: 'standalone', // For Vercel and Docker compatibility
};

module.exports = nextConfig;
