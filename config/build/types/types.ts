import { Configuration } from "webpack";

export type BuildPaths = {
  entry: string;
  html: string;
  output: string;
};

export type Env = {
  mode: Configuration["mode"];
};
export type BuildOptions = {
  paths: BuildPaths;
  mode: Configuration["mode"];
};
