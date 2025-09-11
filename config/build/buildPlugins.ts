import HtmlWebpackPlugin from "html-webpack-plugin";
import { ProgressPlugin, WebpackPluginInstance } from "webpack";

export const buildPlugins = (buildPaths: BuildPaths): WebpackPluginInstance[] => {
  return [
    new HtmlWebpackPlugin(
      {
        template: buildPaths.html,
        favicon: buildPaths.favicon
      }
    ), new ProgressPlugin()
  ];
};