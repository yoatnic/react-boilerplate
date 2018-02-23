const path = require("path");
const webpack = require("webpack");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");

const BASE_PLUGINS = [
  new webpack.DefinePlugin({
    "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV)
  })
];

module.exports = {
  entry:
    process.env.NODE_ENV === "production"
      ? ["babel-polyfill", "./src/index.js"]
      : [
          "babel-polyfill",
          "react-hot-loader/patch",
          "webpack-dev-server/client?http://localhost:8080",
          "webpack/hot/only-dev-server",
          "./src/index.js"
        ],
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "public"),
    publicPath: "/"
  },
  devServer: {
    contentBase: "public/",
    historyApiFallback: true,
    port: 8080,
    hot: true
  },
  plugins:
    process.env.NODE_ENV === "production"
      ? BASE_PLUGINS.concat([new UglifyJsPlugin()])
      : BASE_PLUGINS.concat([
          new webpack.NamedModulesPlugin(),
          new webpack.NoEmitOnErrorsPlugin(),
          new webpack.HotModuleReplacementPlugin()
        ]),
  module: {
    rules: [
      {
        test: /\.js$/,
        use: "babel-loader",
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        loaders: ["style-loader", "css-loader"]
      }
    ]
  },
  resolve: {
    modules: [path.resolve(__dirname, "node_modules"), "node_modules"]
  }
};
