import { resolve } from "path";
import HTMLPlugin from "html-webpack-plugin";
import { CleanWebpackPlugin } from "clean-webpack-plugin";

export const entry = "./src/app.js";
export const output = {
  filename: "bundle.[chunkhash].js",
  path: resolve(__dirname, "public"),
};
export const devServer = {
  port: 3000,
};
export const plugins = [
  new HTMLPlugin({
    template: "./src/index.html",
  }),
  new CleanWebpackPlugin(),
];
export const module = {
  rules: [
    {
      test: /\.css$/i,
      use: ["style-loader", "css-loader"],
    },
  ],
};
