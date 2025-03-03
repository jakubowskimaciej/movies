import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
};

export default nextConfig;

module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'image.tmdb.org',
      },
    ],
  },

  async redirects() {
    return [
      {
        source: '/',
        destination: '/movies/popular',
        permanent: true, // 301 redirect
      },
    ];
  },
};
