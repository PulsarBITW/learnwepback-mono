import { ModuleOptions, RuleSetRule } from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

import { ConfigOptions } from "./types/types";

export const getLoaders = (options: ConfigOptions): ModuleOptions["rules"] => {
  const tsLoader: RuleSetRule = {
    test: /\.tsx?$/,
    use: "ts-loader",
    exclude: /node_modules/,
  }; // ts loader из коробки умеет обращаться с jsx, если бы его не было то нужно было бы настроить babel-loader

  const cssModuleLoader: RuleSetRule = {
    loader: "css-loader",
    //	options?: string | { [index: string]: any }; from types
    options: {
      // modules: true, // when we use other settings we must to use object instead boolean
      modules: {
        localIdentName: options.isDevBuild
          ? "[path][name]__[local]--[hash:base64:5]"
          : "[hash:base64:16]",
      },
    },
  };

  const CssLoaders: RuleSetRule = {
    test: /\.css$/i, // регулярное выражение для всех лоадеров из use
    use: [MiniCssExtractPlugin.loader, cssModuleLoader],
  };

  return [tsLoader, CssLoaders];
};
