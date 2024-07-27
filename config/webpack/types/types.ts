import webpack from "webpack";
import type { Configuration as DevServerConfiguration } from "webpack-dev-server";

export interface ConfigPaths {
  entry: string;
  output: string;
  indexHtml: string;
}
export type ConfigMode = webpack.Configuration["mode"];

export interface EnvironmentVariables {
  mode: ConfigMode;
  port: DevServerConfiguration["port"];
  paths: ConfigPaths;
}

export interface ConfigOptions extends EnvironmentVariables {}
