const nodeExternals = require('webpack-node-externals');

const baseConfig = {
  entry: './src/server.js',
  module: {
    rules : [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }
    ]
  },
  watch: false,
  externals: [nodeExternals()]
};

module.exports = baseConfig;