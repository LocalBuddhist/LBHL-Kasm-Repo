/** @type {import('next').NextConfig} */

const nextConfig = {
  output: 'export',
  distDir: '../public',
  env: {
    name: 'LBHL',
    description: 'The official store for LBHL supported workspaces.',
    icon: '/https://raw.githubusercontent.com/LocalBuddhist/Pictures/refs/heads/main/LBlab%20smol.png',
    listUrl: 'https://registry.kasmweb.com/',
    contactUrl: 'https://github.com/LocalBuddhist/LBHL-Kasm-Repo/issues',
  },
  reactStrictMode: true,
  basePath: '/kasm-registry/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
