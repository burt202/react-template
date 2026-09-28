import {execSync} from "child_process"
import CopyWebpackPlugin from "copy-webpack-plugin"
import path from "path"
import webpack from "webpack"

const lastUpdated = Date.now()

const gitHash = execSync("git rev-parse --short HEAD").toString().trim()

const config: webpack.Configuration = {
  entry: ["./src/js/index.tsx"],
  output: {
    publicPath: "/",
    path: path.join(__dirname, "../build"),
    filename: "bundle.[contenthash].js",
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [{from: "src/favicon.png", to: "favicon.png"}],
    }),
    new webpack.DefinePlugin({
      "process.env": {
        LAST_UPDATED: lastUpdated,
        GIT_HASH: JSON.stringify(gitHash),
      },
    }),
  ],
}

export default config
