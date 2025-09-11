import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { ProgressPlugin } from 'webpack';

const mode = "production";


module.exports = (env: any) => {
  return {
    mode: env.mode || mode,
    entry: path.resolve(__dirname, "src", "index.ts"),
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
      ), new ProgressPlugin()
    ],
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: 'ts-loader',
          exclude: /node_modules/,
        },
      ],
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.js', '.jsx'],
    },
    devtool: 'inline-source-map',
  };
};