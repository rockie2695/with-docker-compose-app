/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  webpack: (config, context) => {
    // Enable polling based on env variable being set
    if (process.env.NEXT_WEBPACK_USEPOLLING) {
      config.watchOptions = {
        poll: 1000,
        aggregateTimeout: 500,
      };
    }
    return config;
  },
};

module.exports = nextConfig;
