/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
    reactStrictMode: false,
    webpack: (config, options) => {
        config.module.rules.push(
          {
            test: /\.svg$/,
            use: [
              options.defaultLoaders.babel,
              {
                loader: '@svgr/webpack',
                options: { babel: false },
              },
            ],
          },
        );
        return config;
      }
}

module.exports = nextConfig
