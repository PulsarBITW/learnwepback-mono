import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { ConfigOptions } from "./types/types";
import { EnvironmentPlugin } from "webpack";

export const getPlugins = (options: ConfigOptions) => {
  const environmentPlugin = new EnvironmentPlugin({
    BASE_URL: options.BASE_URL ? options.BASE_URL : undefined,
  });

  const htmlWebpackPlugin = new HtmlWebpackPlugin({
    template: options.paths.indexHtml,
  });

  const miniCssExtractPlugin = new MiniCssExtractPlugin({
    filename: "css/[name].[contenthash].css",
    chunkFilename: "css/[name].[contenthash].css",
  });

  return [environmentPlugin, htmlWebpackPlugin, miniCssExtractPlugin];
};
