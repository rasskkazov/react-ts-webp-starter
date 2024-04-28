import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { EnvironmentPlugin } from "webpack";
import { Configuration } from "webpack";
import { BuildOptions } from "./types/types";
import { envVars } from "../env/variables";

export function buildPlugins({
  mode,
  paths,
}: BuildOptions): Configuration["plugins"] {
  const isProd = mode === "production";

  const plugins: Configuration["plugins"] = [];

  plugins.push(
    new HtmlWebpackPlugin({ template: paths.html }),
    new EnvironmentPlugin(envVars)
  );

  if (isProd) {
    plugins.push(
      new MiniCssExtractPlugin({
        filename: "css/[name].[contenthash].css",
        chunkFilename: "css/[name].[contenthash].css",
      })
    );
  }

  return plugins;
}
