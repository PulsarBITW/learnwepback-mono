import webpack from "webpack";
import type { WebpackConfiguration } from "webpack-dev-server";

import path from "path"; // модуль для обработки путей

import { getPlugins } from "./getPlugins";
import { getDevServer } from "./getDevServer";
import { getLoaders } from "./getLoaders";
import { ConfigOptions } from "./types/types";

export const createWepbackConfig = (
  options: ConfigOptions
): WebpackConfiguration => {
  const config: webpack.Configuration = {
    mode: options.mode ?? "development",
    entry: options.paths.entry,
    output: {
      path: options.paths.output,
      filename: "[name].[contenthash].js", // имя файла с билдом
      clean: true, // Удаление старых билдов
    },
    module: {
      rules: getLoaders(options),
    },
    plugins: getPlugins(options),
    devServer: getDevServer(options),
    resolve: {
      extensions: [".tsx", ".ts", ".js"],
    },
    devtool: options.isDevBuild && "inline-source-map",
  };

  return config;
};
