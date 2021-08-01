const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  devServer: {
    contentBase: './public',
    host: '0.0.0.0',
  },
  entry: './src/index.tsx',
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.scss$/i,
        use: [
          'style-loader',
          { loader: 'css-loader', options: { modules: false } },
          'sass-loader',
        ],
      },
      {
        exclude: /node_modules/,
        test: /\.(tsx?|js)$/,
        use: { loader: 'babel-loader' },
      },
    ],
  },
  output: {
    clean: true,
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public'),
    publicPath: '/',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      title: 'My life',
    }),
  ],
  resolve: {
    alias: {
      components: path.resolve(__dirname, 'src/components/'),
      layouts: path.resolve(__dirname, 'src/layouts/'),
      pages: path.resolve(__dirname, 'src/pages'),
      styles: path.resolve(__dirname, 'src/styles/'),
    },
    extensions: ['.tsx', '.ts', '.js', '.scss'],
  },
}
