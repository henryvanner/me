const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.tsx",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "public"),
    clean: true,
    publicPath: '/'
  },
  resolve: {
    alias: {
      components: path.resolve(__dirname, "src/components/"),
      layouts: path.resolve(__dirname, "src/layouts/"),
      styles: path.resolve(__dirname, "src/styles/"),
    },
    extensions: [".tsx", ".ts", ".js", ".scss"],
  },
  module: {
    rules: [
      {
        test: /\.scss$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(tsx?|js)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "My life",
      template: "./src/index.html",
    }),
  ],
  devServer: {
    contentBase: "./public",
    host: "0.0.0.0",
  },
  mode: "development",
};
