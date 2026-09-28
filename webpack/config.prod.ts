import CssMinimizerPlugin from "css-minimizer-webpack-plugin"
import HtmlWebpackPlugin from "html-webpack-plugin"
import MiniCssExtractPlugin from "mini-css-extract-plugin"
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
      filename: "bundle.[contenthash].css",
    }),
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      inject: false,
      templateParameters: (compilation) => {
        const assets = compilation.getAssets()

        return {
          production: true,
          lastUpdated,
          siteTitle: "Prod Build",
          jsFile: assets.find((a) => a.name.endsWith(".js"))?.name,
          cssFile: assets.find((a) => a.name.endsWith(".css"))?.name,
        }
      },
    }),
  ],
})
