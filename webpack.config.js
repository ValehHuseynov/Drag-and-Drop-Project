const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/app.ts",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "dist",
  },

  devtool: "inline-source-map",
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader",
        exclude: /node-modules/,
      },
    ],
  },

  resolve: {
    extensions: [".ts", ".js"],
  },

  devServer: {
    static: {
      directory: path.join(__dirname, "prj-02-prj-input-form"),
    },
    compress: true,
    port: 8080,
  },
};
