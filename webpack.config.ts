import path from 'path';
import { Configuration } from 'webpack';
import { BuildEnv, BuildPaths } from './config/build/types/config';
import { buildPlugins } from './config/build/buildPlugins';
import { buildLoaders } from './config/build/buildLoaders';
import { buildResolvers } from './config/build/buildResolvers';
import { buildWebpackConfig } from './config/build/buildWebpackConfig';

const buildPaths: BuildPaths = {
  entry: path.resolve(__dirname, "src", "index.ts"),
  build: path.resolve(__dirname, 'dist'),
  html: path.resolve(__dirname, "public", "index.html"),
  favicon: path.resolve(__dirname, "public", "favicon.ico"),
};

const config = (env: BuildEnv): Configuration => buildWebpackConfig({
  mode: env.mode,
  buildPaths: buildPaths,
  isDev: env.mode === "development",
  port: env.port || 3001
});
export default config;