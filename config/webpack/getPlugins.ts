import webpack, { EnvironmentPlugin } from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { ConfigOptions } from "./types/types";
import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer";

export const getPlugins = (
  options: ConfigOptions
): webpack.Configuration["plugins"] => {
  let plugins: webpack.Configuration["plugins"] = [];

  const environmentPlugin = new EnvironmentPlugin({
    BASE_URL: options.BASE_URL ? "/something" : null,
  });
  plugins.push(environmentPlugin);

  const htmlWebpackPlugin = new HtmlWebpackPlugin({
    template: options.paths.indexHtml,
  });
  plugins.push(htmlWebpackPlugin);

  const miniCssExtractPlugin = new MiniCssExtractPlugin({
    filename: "css/[name].[contenthash].css",
    chunkFilename: "css/[name].[contenthash].css",
  });
  plugins.push(miniCssExtractPlugin);

  if (options.showAnalyzer) {
    const webpackAnalyzer = new BundleAnalyzerPlugin();
    plugins.push(webpackAnalyzer);
  }

  return plugins;
};
