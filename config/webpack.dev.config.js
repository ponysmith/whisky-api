const baseConfig = require('./webpack.base.config');

devConfig = {
  mode: 'development',
  output: {
    filename: 'dev.bundle.js'
  }
}

module.exports = { ...baseConfig, ...devConfig };