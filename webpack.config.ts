import path from "path";
import {BuildEnv, BuildMode, BuildPaths} from "./config/build/types/config";
import {buildWebpackConfig} from "./config/build/buildWebpackConfig";

export default (env: BuildEnv) => {
  const mode: BuildMode = env.mode || 'development';
  const isDev = mode === 'development';
  const PORT = env.port || 3000;

  const paths: BuildPaths = {
    html: path.resolve(__dirname, 'public', 'index.html'),
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    output: path.resolve(__dirname, 'build')
  };

  const config = buildWebpackConfig({
    mode,
    paths,
    isDev,
    port: PORT
  });

  return config;
};
