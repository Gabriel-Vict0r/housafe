/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    URL_API: process.env.URL_API,
    SERVICE_ID: process.env.SERVICE_ID,
    TEMPLATE: process.env.TEMPLATE,
    EMAIL_KEY: process.env.EMAIL_KEY,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "housesafebucket.s3.amazonaws.com",
      },
    ],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
