type BuildMode = "development" | "production";

interface BuildEnv {
  mode: BuildMode;
}

interface BuildPaths {
  entry: string;
  build: string;
  html: string;
  favicon: string;
}
