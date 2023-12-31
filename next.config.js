/** @type {import('next').NextConfig} */
// next.config.js

const isGithubActions = process.env.GITHUB_ACTIONS || false

let repo = ''
let assetPrefix = ``
let basePath = ``

if (isGithubActions) {
  repo = process.env.GITHUB_REPOSITORY.replace(/.*?\//, '')

  assetPrefix = `/`
  basePath = ``
}

const nextConfig = {
  output: 'export',
  assetPrefix: assetPrefix,
  basePath: basePath,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "shdw-drive.genesysgo.net",
      },
    ],
  },
  experimental: {
    serverActions: false,
  },
};

module.exports = nextConfig;
