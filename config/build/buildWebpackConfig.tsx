import { Configuration } from "webpack";
import { BuildOptions } from "./types/config";
import { buildPlugins } from "./buildPlugins";
import { buildLoaders } from "./buildLoaders";
import { buildResolvers } from "./buildResolvers";
import { buildDevServer } from "./buildDevServer";

export const buildWebpackConfig = (options: BuildOptions): Configuration => {
  console.log(`isDev:${options.isDev}`);

  return {
    mode: options.mode || "development",
    entry: options.buildPaths.entry,
    output: {
      path: options.buildPaths.build,
      filename: "[name].[contenthash].js",
      clean: true,
      chunkFilename: "[name].[contenthash].js",
    },
    plugins: buildPlugins(options.buildPaths),
    module: {
      rules: buildLoaders(options.isDev),
    },
    resolve: buildResolvers(),
    devServer: options.isDev ? buildDevServer(options.port) : undefined,
    devtool: options.isDev ? "inline-source-map" : undefined,
  };
};
