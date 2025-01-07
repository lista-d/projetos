/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  assetPrefix: process.env.NODE_ENV === 'production' ? '/projetos/' : '',
  basePath: process.env.NODE_ENV === 'production' ? '/projetos' : '',
  trailingSlash: true,
}

module.exports = nextConfig 