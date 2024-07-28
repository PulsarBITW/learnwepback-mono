import { ModuleOptions } from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

export const getLoaders = (): ModuleOptions["rules"] => {
  const tsLoader = {
    test: /\.tsx?$/,
    use: "ts-loader",
    exclude: /node_modules/,
  }; // ts loader из коробки умеет обращаться с jsx, если бы его не было то нужно было бы настроить babel-loader

  // TODO разобраться с css module

  const allCssLoaders = {
    test: /\.css$/i,
    use: [MiniCssExtractPlugin.loader, "css-loader"],
  };

  return [tsLoader, allCssLoaders];
};
