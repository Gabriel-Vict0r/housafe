/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    URL_API: process.env.URL_API,
  },
  images: {
    remotePatterns: [
      {
      protocol: 'https',
      hostname: 'housesafebucket.s3.amazonaws.com',
      }
    ]
  },
    logging: {
    fetches: {
      fullUrl: true,
    },
  },
};

export default nextConfig;
