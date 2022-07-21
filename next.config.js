/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    styledComponents: true,
  },
  experimental: {
    modularizeImports: {
      antd: {
        transform: 'antd/lib/{{member}}',
      },
      lodash: {
        transform: 'lodash/{{member}}',
      },
    },
  },
  webpack: config => {
    if (!config.experiments) {
      config.experiments = {}
    }
    config.experiments.topLevelAwait = true
    return config
  },
}

module.exports = nextConfig
