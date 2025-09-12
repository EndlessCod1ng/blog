export type BuildMode = "development" | "production";

export interface BuildEnv {
  mode: BuildMode;
  port:number
}

export interface BuildPaths {
  entry: string;
  build: string;
  html: string;
  favicon: string;
}

export interface BuildOptions {
  mode: BuildMode,
  buildPaths: BuildPaths;
  isDev:boolean
  port:number
}
