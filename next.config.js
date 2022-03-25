/** @type {import('next').NextConfig} */
const path = require('path')

const withNextra = require('nextra')({
  // reactStrictMode: true,
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.js',
  // optional: add `unstable_staticImage: true` to enable Nextra's auto image import
  // sassOptions: {
  //   includePaths: [path.join(__dirname, 'styles')],
  //   prependData: `@import "global.scss";`
  // }
})


module.exports = withNextra()