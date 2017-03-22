const {resolve} = require('path')
const webpack = require('webpack')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const DEV = process.env.NODE_ENV === 'development'
const TITLE = require('./package.json').name
  .replace(/-/g, ' ')
  .replace(/\w\S*/g, str => str.charAt(0).toUpperCase() + str.substr(1).toLowerCase())

module.exports = {
  context: resolve(__dirname, 'src'),
  entry: {
    'main': [
      './index'
    ]
  },
  resolve: {
    modules: [resolve(__dirname, 'src'), 'node_modules']
  },
  output: {
    path: resolve(__dirname, 'build'),
    filename: DEV ? '[name].js' : '[name].[hash].js',
    chunkFilename: DEV ? '[name].js' : '[name].[chunkhash].js'
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'eslint-loader'
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: [{
            loader: 'style-loader'
          }],
          use: [
            {
              loader: 'css-loader',
              options: {
                modules: true,
                localIdentName: DEV ? '[name]-[local]-[hash:base64:5]' : '[hash:base64]',
                importLoaders: true,
                minimize: DEV ? false : { discardComments: { removeAll: true } }
              }
            },
            {
              loader: 'postcss-loader'
            }
          ]
        })
      },
      {
        test: /\.(svg|woff2?|jpe?g|png|gif)(\?.*)?$/i,
        use: {
          loader: 'url-loader',
          options: {
            name: `[path][name]${DEV ? '' : '.[hash:base64]'}.[ext]`,
            limit: 8192
          }
        }
      }
    ]
  },
  plugins: ([
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
      'process.env.TITLE': JSON.stringify(TITLE)
    }),
    new ExtractTextPlugin({
      filename: '[name].[contenthash].css',
      allChunks: true,
      disable: DEV
    }),
    new HtmlWebpackPlugin({
      inject: true,
      template: './index.ejs',
      minify: { collapseWhitespace: true },
      title: TITLE
    })
  ]).concat(DEV ? [] : [
    new CleanWebpackPlugin('./build/*'),
    new webpack.optimize.UglifyJsPlugin({
      output: {
        comments: false
      }
    })
  ])
}
