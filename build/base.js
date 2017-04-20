const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const path = require('path')
const config = require('../config/entries.json')

let entry = {}
let htmlGenerator = []
config.pages.forEach((v) => {
  entry[v] = path.join(__dirname, `../src/pages/${v}/index.js`)
  htmlGenerator.push(new HtmlWebpackPlugin({
    filename: `${v}.html`,
    favicon: path.join(__dirname, '../logo.png'),
    template: path.join(__dirname, `../src/pages/${v}/index.html`),
    inject: 'body',
    chunks: ['vendor', v],
    hash: true
  }))
})
let webpackConfig = {
  target: 'web',
  profile: true,
  entry: entry,
  output: {
    path: path.join(__dirname, '../dist'),
    filename: '[name].js',
  },
  resolve: {
    extensions: ['.vue', '.js', '.scss', '.css', '.html'],
    alias: {
      vue$: 'vue/dist/vue.common.js'
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.vue$/,
        use: {
          loader: 'vue-loader',
          options: {
            loaders: {
              css: ExtractTextPlugin.extract({
                use: 'css-loader!postcss-loader',
                fallback: 'vue-style-loader'
                // <- this is a dep of vue-loader, so no need to explicitly install if using npm3
              }),
              scss: ExtractTextPlugin.extract({
                use: 'css-loader!postcss-loader!sass-loader?sourceMap',
                fallback: 'vue-style-loader'
              })
            }
          }
        }
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: ExtractTextPlugin.extract({
          use: 'css-loader!postcss-loader!sass-loader?sourceMap',
          fallback: 'style-loader'
        })
      },
      {
        test: /\.json$/,
        exclude: /node_modules/,
        use: 'json-loader'
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 2048,
            name: './images/[name].[ext]'
          }
        }
      },
      {
        test: /\.woff|\.woff2|\.svg|\.eot|\.ttf/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 2048,
            name: './fonts/[name].[ext]'
          }
        }
      }
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: 'vendor.js',
      minChunks: 2
    }),
    new ExtractTextPlugin('[name].css')
  ]
}
webpackConfig.plugins.push(...htmlGenerator)

module.exports = webpackConfig
