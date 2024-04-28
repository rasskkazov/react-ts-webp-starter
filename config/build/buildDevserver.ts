import type { Configuration as DevServerConfiguration } from "webpack-dev-server";
import type { BuildOptions } from "./types/types";
import { env } from "process";
export function buildDevServer(options: BuildOptions): DevServerConfiguration {
  return {
    port: process.env.PORT || 3000,
    open: true,
    historyApiFallback: true,
  };
}
