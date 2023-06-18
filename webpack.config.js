/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */

const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const EslingPlugin = require('eslint-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: {
    main: path.resolve(__dirname, './rs-css/index.ts')
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'script.bundle.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'webpack Boilerplate',
      template: path.resolve(__dirname, './rs-css/index.html'), // шаблон
      filename: 'index.html' // название выходного файла
      // favicon: "./minesweeper/assets/images/favicon.ico"
    }),
    new CleanWebpackPlugin(),
    new EslingPlugin({ extensions: 'ts' })
  ],
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },
  module: {
    rules: [
      {
        test: /\.(?:ico|gif|png|jpg|svg|jpeg|mp3)$/i,
        type: 'asset/resource'
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf|)$/,
        type: 'asset/inline'
      },
      {
        test: /\.(scss|css)$/,
        use: ['style-loader', 'css-loader']
      },
      { test: /\.ts$/i, use: 'ts-loader', exclude: /node_modules/ }
    ]
  }
}
