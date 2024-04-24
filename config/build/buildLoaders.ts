import { ModuleOptions } from "webpack";
import { BuildOptions } from "./types/types";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

export function buildLoaders({ mode }: BuildOptions): ModuleOptions["rules"] {
  const isDev = mode === "development";

  const cssLoader = {
    test: /\.s[ac]ss$/i,
    use: [
      isDev ? "style-loader" : MiniCssExtractPlugin.loader,
      "css-loader",
      "sass-loader",
    ],
  };

  const tsLoader = {
    test: /\.tsx?$/,
    use: "ts-loader",
    exclude: /node_modules/,
  };

  return [cssLoader, tsLoader];
}
