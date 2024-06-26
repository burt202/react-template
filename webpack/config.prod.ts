/* eslint-disable-next-line import/namespace */
import * as CssMinimizerPlugin from "css-minimizer-webpack-plugin"
import * as HtmlWebpackPlugin from "html-webpack-plugin"
import * as MiniCssExtractPlugin from "mini-css-extract-plugin"
import * as webpack from "webpack"
import {merge} from "webpack-merge"

import common from "./config.common"

const lastUpdated = Date.now()

export default merge(common, {
  mode: "production",
  optimization: {
    minimizer: [new CssMinimizerPlugin(), "..."],
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [{loader: MiniCssExtractPlugin.loader}, {loader: "css-loader"}],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "bundle.css",
    }),
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify("production"),
        LAST_UPDATED: lastUpdated,
      },
    }),
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      inject: false,
      templateParameters: {
        production: true,
        lastUpdated,
      },
    }),
  ],
})
