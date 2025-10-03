/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '/E2PDAO',
  images: {
    domains: ['localhost'],
    unoptimized: true
  },
  trailingSlash: true,
  output: 'export'
}

module.exports = nextConfig
