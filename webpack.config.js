const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const mode = "production";

module.exports = {
  mode: mode,
  entry: path.resolve(__dirname, "src", "index.js"),
  output: {
    filename: "[name].[contenthash].js",
    path: path.resolve(__dirname, 'dist'),
    clean: true
  },
  plugins: [
    new HtmlWebpackPlugin(
      {
        template: path.resolve(__dirname, "public", "index.html"),
        favicon: path.resolve(__dirname, "public", "favicon.ico")
      }
    )
  ]
};