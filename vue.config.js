const CompressionPlugin = require('compression-webpack-plugin');

module.exports = {
  configureWebpack: {
    entry: ['./src/main.ts'],
    optimization: {
      splitChunks: {
        chunks: 'all',
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name(module) {
              let packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)
              if (packageName) {
                return `npm.${packageName[1].replace('@', '')}`;
              }
            },
          },
        },
        maxInitialRequests: Infinity,
        minSize: 0
      }
    },
    plugins: [
      new CompressionPlugin({
        algorithm: 'gzip'
      })
    ],
  },
  css: {
    loaderOptions: {
      less: {
        globalVars: {
          'primary-color': '#3490dc'
        }
      }
    }
  },
  pwa: {
    name: 'Klorie'
  }
}
