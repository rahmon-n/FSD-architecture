export type BuildMode = 'production' | 'development'

export interface BuildPaths {
  html: string;
  entry: string;
  output: string;
}

export interface BuildOptions {
  mode: BuildMode;
  paths: BuildPaths
  isDev: boolean;
  port: number;
}

export interface BuildEnv {
  mode: BuildMode;
  port: number;
}
