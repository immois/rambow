const { SELLER_URL } = process.env

module.exports = {
  reactStrictMode: true,
  experimental: {
    transpilePackages: ["@rambow/ui"],
  },
  async rewrites() {
    return [
      {
        source: '/seller',
        destination: `${SELLER_URL}/seller`,
      },
      {
        source: '/seller/:path*',
        destination: `${SELLER_URL}/seller/:path*`,
      },
    ]
  },
};
