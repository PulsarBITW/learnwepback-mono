import webpack from "webpack";
import type {
  Configuration as DevServerConfiguration,
  WebpackConfiguration,
} from "webpack-dev-server";

import path from "path"; // модуль для обработки путей

import { getPlugins } from "./getPlugins";
import { getDevServer } from "./getDevServer";
import { getLoaders } from "./getLoaders";
import { ConfigOptions } from "./types/types";

export const createWepbackConfig = (
  options: ConfigOptions
): WebpackConfiguration => {
  const isDevBuild = options.mode === "development";
  const isProdBuild = options.mode === "production";

  const config: webpack.Configuration = {
    mode: options.mode ?? "development",
    entry: options.paths.entry,
    output: {
      path: options.paths.output,
      filename: "[name].[contenthash].js", // имя файла с билдом
      clean: true, // Удаление старых билдов
    },
    module: {
      rules: getLoaders(),
    },
    plugins: getPlugins(options),
    devServer: getDevServer(options),
    resolve: {
      extensions: [".tsx", ".ts", ".js"],
    },
    devtool: isDevBuild && "inline-source-map",
  };

  return config;
};
