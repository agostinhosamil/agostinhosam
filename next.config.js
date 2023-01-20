/** @type {import('next').NextConfig} */
const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './config/nextra.theme.js'
})
module.exports = withNextra()
