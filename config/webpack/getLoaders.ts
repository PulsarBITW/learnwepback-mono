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

  const assetLoader: RuleSetRule = {
    test: /\.(png|jpg|jpeg|gif)$/i,
    type: "asset/resource",
  };

  // Убрать svg из assetLoader
  const svgrLoader: RuleSetRule = {
    test: /\.svg$/i,
    use: [
      { loader: "@svgr/webpack", options: { icon: true } }, // icon true позволяет работать с svg как с иконками и менять размер содержимого а не контейнера, <AwardsSvg width={250} height={250} />, - даст содержимому 250 250
    ],
  };

  const CssLoaders: RuleSetRule = {
    test: /\.css$/i, // регулярное выражение для всех лоадеров из use
    use: [MiniCssExtractPlugin.loader, cssModuleLoader],
  };

  return [tsLoader, CssLoaders, assetLoader, svgrLoader];
};
