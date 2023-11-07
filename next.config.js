/** @type {import('next').NextConfig} */
// next.config.js

const isGithubActions = process.env.GITHUB_ACTIONS || false

// const repo = 'rinaldihealth'
// const assetPrefix = `/${repo}/`
// const basePath = `/${repo}`

if (isGithubActions) {
  const repo = process.env.GITHUB_REPOSITORY.replace(/.*?\//, '')

  assetPrefix = `/${repo}/`
  basePath = `/${repo}`
}

const nextConfig = {
  assetPrefix: assetPrefix,
  basePath: basePath,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "shdw-drive.genesysgo.net",
      },
    ],
  },
  experimental: {
    serverActions: true,
  },
};

module.exports = nextConfig;
