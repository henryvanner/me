const process = require('process')
const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')

const publicDir = path.resolve(__dirname, 'public')
const htmlTemplate = path.resolve(__dirname, 'src/index.html')
const appEntry = path.resolve(__dirname, 'src/index.tsx')

module.exports = () => {
  const mode = process.env.NODE_ENV ?? 'development'
  const isDevMode = mode === 'development'

  return {
    devServer: {
      contentBase: publicDir,
      host: '0.0.0.0',
    },
    devtool: isDevMode ? 'inline-cheap-module-source-map' : false,
    entry: [
      isDevMode && 'webpack-hot-middleware/client',
      appEntry,
    ].filter(Boolean),
    mode,
    module: {
      rules: [
        {
          test: /\.scss$/i,
          use: [
            isDevMode ? 'style-loader' : MiniCssExtractPlugin.loader,
            { loader: 'css-loader', options: { modules: false } },
            'sass-loader',
          ],
        },
        {
          exclude: /node_modules/,
          test: /\.tsx?$/,
          use: { loader: 'babel-loader' },
        },
        {
          test: /\.(png|svg|jpg|jpeg|gif)$/i,
          type: 'asset/resource',
        },
      ],
    },
    output: {
      clean: true,
      filename: 'bundle.js',
      path: publicDir,
      publicPath: '/',
    },
    plugins: [
      new HtmlWebpackPlugin({ template: htmlTemplate }),
      !isDevMode && new MiniCssExtractPlugin(),
      isDevMode && new webpack.HotModuleReplacementPlugin(),
      isDevMode && new ReactRefreshWebpackPlugin(),
    ].filter(Boolean),
    resolve: {
      alias: {
        components: path.resolve(__dirname, 'src/components/'),
        helpers: path.resolve(__dirname, 'src/helpers/'),
        layouts: path.resolve(__dirname, 'src/layouts/'),
        pages: path.resolve(__dirname, 'src/pages'),
        styles: path.resolve(__dirname, 'src/styles/'),
      },
      extensions: ['.tsx', '.ts', '.js', '.scss'],
    },
  }
}
