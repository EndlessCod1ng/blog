import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { Configuration, ProgressPlugin } from 'webpack';

const buildPaths: BuildPaths = {
  entry: path.resolve(__dirname, "src", "index.ts"),
  build: path.resolve(__dirname, 'dist'),
  html: path.resolve(__dirname, "public", "index.html"),
  favicon: path.resolve(__dirname, "public", "favicon.ico"),
};
const config = (env: BuildEnv): Configuration => {
  const mode = env.mode || "development";
  return {
    mode: mode,
    entry: path.resolve(__dirname, "src", "index.ts"),
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: "[name].[contenthash].js",
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
export default config;