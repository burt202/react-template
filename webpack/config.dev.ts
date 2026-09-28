import HtmlWebpackPlugin from "html-webpack-plugin"
import {merge} from "webpack-merge"

import common from "./config.common"

const lastUpdated = Date.now()

export default merge(common, {
  mode: "development",
  devtool: "inline-source-map",
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [{loader: "style-loader"}, {loader: "css-loader"}],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      inject: false,
      templateParameters: (compilation) => {
        const assets = compilation.getAssets()

        return {
          production: false,
          lastUpdated,
          siteTitle: "Dev Build",
          jsFile: assets.find((a) => a.name.endsWith(".js"))?.name,
          cssFile: assets.find((a) => a.name.endsWith(".css"))?.name,
        }
      },
    }),
  ],
})
