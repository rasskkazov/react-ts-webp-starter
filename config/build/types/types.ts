import { Configuration } from "webpack";

export type BuildPaths = {
  [key: string]: string;
};

export type Env = {
  mode: Configuration["mode"];
};
export type BuildOptions = {
  paths: BuildPaths;
  mode: Configuration["mode"];
};
