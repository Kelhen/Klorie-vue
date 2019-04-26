const tailwindcss = require('tailwindcss')
const purgecss = require('@fullhuman/postcss-purgecss')
const autoprefixer = require('autoprefixer')

module.exports = {
  plugins: [
    tailwindcss('./tailwind.js'),
    purgecss({
      content: [
        './src/**/*.html',
        './src/**/*.vue',
        // './node_modules/iview/src/iview.min.js'
        './node_modules/iview/src/components/**/*.vue'
      ],
      whitelistPatterns: [/(ivu).*/],
    }),
    autoprefixer
  ]
}
