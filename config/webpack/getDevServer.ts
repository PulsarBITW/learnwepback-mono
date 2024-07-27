import { ConfigOptions } from "./types/types";

export const getDevServer = (options: ConfigOptions) => {
  return {
    port: options.port ?? "3000",
    open: true,
  };
};
