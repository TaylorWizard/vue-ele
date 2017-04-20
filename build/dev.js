const path = require('path')
const webpack = require('webpack')
const baseConfig = require('./base.js')

let devConfig = baseConfig
devConfig.plugins = baseConfig.plugins.concat([
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: '"development"'
    }
  })
])

devConfig.devServer = {
  contentBase: path.join(__dirname, '../dist'),
  compress: false,
  port: 9020
}

module.exports = devConfig