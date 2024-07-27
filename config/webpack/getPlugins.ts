import path from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { ConfigOptions } from "./types/types";

export const getPlugins = (options: ConfigOptions) => {
  const htmlWebpackPlugin = new HtmlWebpackPlugin({
    template: options.paths.indexHtml,
  });

  const miniCssExtractPlugin = new MiniCssExtractPlugin({
    filename: "css/[name].[contenthash].css",
    chunkFilename: "css/[name].[contenthash].css",
  });

  return [htmlWebpackPlugin, miniCssExtractPlugin];
};
