/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["shopify.com"],
  },
  trailingSlash: true,
};

module.exports = nextConfig;
