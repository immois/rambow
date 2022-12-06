const { SELLER_URL } = process.env

module.exports = {
  reactStrictMode: true,
  experimental: {
    transpilePackages: ["@rambow/ui"],
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: [{
        loader: "@svgr/webpack",
        options: {
          icon: true,
          svgProps: {
            fill: 'currentColor'
          }
        }
      }],
    });

    return config;
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
