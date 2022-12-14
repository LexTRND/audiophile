/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    loader: "default",
    domains: ["localhost", "https://firebasestorage.googleapis.com/"],
  },
};

module.exports = nextConfig;
