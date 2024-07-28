import path from "path";
import webpack from "webpack";

import {
  ConfigPaths,
  EnvironmentVariables,
} from "./config/webpack/types/types";
import { createWepbackConfig } from "./config/webpack/createWebpackConfig";

export default (env: EnvironmentVariables) => {
  const isDevBuild = env.mode === "development";
  const isProdBuild = env.mode === "production";

  const paths: ConfigPaths = {
    entry: path.resolve(__dirname, "src", "index.tsx"),
    output: path.resolve(__dirname, "build"),
    indexHtml: path.resolve(__dirname, "public", "index.html"),
  };

  const config: webpack.Configuration = createWepbackConfig({
    mode: env.mode ?? "development",
    port: env.port ?? "3000",
    paths,
    isDevBuild,
    isProdBuild,
  });

  return config;
};
