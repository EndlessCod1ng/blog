import path from 'path';
import { Configuration } from 'webpack';
import { BuildEnv, BuildPaths } from './config/build/types/config';
import { buildWebpackConfig } from './config/build/buildWebpackConfig';


export default (env: BuildEnv): Configuration => {

  const buildPaths: BuildPaths = {
    entry: path.resolve(__dirname, "src", "index.tsx"),
    build: path.resolve(__dirname, 'dist'),
    html: path.resolve(__dirname, "public", "index.html"),
    favicon: path.resolve(__dirname, "public", "favicon.ico"),
  };

  const mode = env.mode || "development";
  const isDev = mode === "development";
  const PORT = env.port || 3000;

  const config = buildWebpackConfig({
    mode,
    buildPaths: buildPaths,
    isDev,
    port: PORT
  });

  return config;
};