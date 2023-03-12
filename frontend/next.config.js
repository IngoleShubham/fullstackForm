/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async rewrites() {
    return [
      {
        source: "/api/signup",
        destination: "http://localhost:8080/api/signup",
      },
    ];
  },
}

module.exports = nextConfig
