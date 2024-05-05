import path from "path";
import { buildWebpack } from "./config/build/buildWebpack";
import { BuildOptions, Env } from "./config/build/types/types";

export default (env: Env) => {
  const options: BuildOptions = {
    paths: {
      entry: path.resolve(__dirname, "src", "index.tsx"),
      html: path.resolve(__dirname, "public", "index.html"),
      output: path.resolve(__dirname, "bundle"),
      src: path.resolve(__dirname, "src"),
      public: path.resolve(__dirname, "public"),
    },
    mode: env.mode ?? "development",
  };

  const config = buildWebpack(options);

  return config;
};
