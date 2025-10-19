/** @type {import('next').NextConfig} */

const nextConfig = {
  output: 'export',
  distDir: '../public',
  env: {
    name: 'LBHL',
    description: 'The official store for LBHL supported workspaces.',
    icon: 'https://localbuddhist.github.io/LBHL-Kasm-Repo/1.1/icon.png',
    listUrl: 'https://localbuddhist.github.io/LBHL-Kasm-Repo/',
    contactUrl: 'https://github.com/LocalBuddhist/LBHL-Kasm-Repo/issues',
  },
  reactStrictMode: true,
  basePath: '/kasm-registry/1.1',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
