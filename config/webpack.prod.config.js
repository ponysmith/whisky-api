const baseConfig = require('./webpack.base.config');

prodConfig = {
  mode: 'production',
  output: {
    filename: 'prod.bundle.js'
  }
}

module.exports = { ...baseConfig, ...prodConfig };