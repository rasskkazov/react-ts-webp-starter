import webpack from "webpack";
import { buildDevServer } from "./buildDevserver";
import { buildPlugins } from "./buildPlugins";
import { buildLoaders } from "./buildLoaders";
import { buildResolvers } from "./buildResolvers";
import type { BuildOptions } from "./types/types";

export function buildWebpack(options: BuildOptions): webpack.Configuration {
  const { paths, mode } = options;
  const isDev = mode === "development";

  return {
    mode: mode,

    entry: paths.entry,
    output: {
      path: paths.output,
      filename: "[name].[contenthash].js",
      clean: true,
    },

    plugins: buildPlugins(options),

    module: {
      rules: buildLoaders(options),
    },

    resolve: buildResolvers(options),

    devtool: isDev ? "inline-source-map" : undefined,

    devServer: isDev ? buildDevServer(options) : undefined,
  };
}
