const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  entry: {
    flashcardApp: "./src/Main.tsx",
  },
  mode: "development",
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    index: "flashcardApp-index.html",
    port: 8009,
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    publicPath: "auto",
    chunkFilename: "./flashcardApp/[id].js",
    clean: true,
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$|\.ts?$/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-react"],
            },
          },
          "ts-loader",
        ],
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      filename: "[name]-index.html",
    }),
  ],
};
