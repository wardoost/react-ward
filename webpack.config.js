const {resolve} = require('path')
const webpack = require('webpack')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const DEV = process.env.NODE_ENV === 'development'

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
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1
            }
          },
          'postcss-loader'
        ]
      },
      {
        test: /\.(svg|jpe?g|png|gif)(\?.*)?$/i,
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
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    }),
    new HtmlWebpackPlugin({
      inject: true,
      template: './index.html'
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
