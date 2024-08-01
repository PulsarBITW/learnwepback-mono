import type { Configuration as DevServerConfiguration } from "webpack-dev-server";
import { ConfigOptions } from "./types/types";

export const getDevServer = (
  options: ConfigOptions
): DevServerConfiguration => {
  return {
    port: options.port ?? "3000",
    open: true,
    historyApiFallback: true,
    hot: options.isDevBuild,
  };
};
