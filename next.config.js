/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: {
    unoptimized: true,
  },
  // If using basePath for GitHub Pages user site, uncomment:
  // basePath: '',
  // If repo name is not username.github.io, use:
  // basePath: '/repo-name',
}

module.exports = nextConfig
