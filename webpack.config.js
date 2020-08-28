const path = require("path");
const bodyParser = require("body-parser");

module.exports = {
  entry: "./src/index.tsx",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "public"),
    publicPath: "/",
  },
  devServer: {
    contentBase: "public/",
    port: 5000,
    before(app) {
      app.use(
        bodyParser.urlencoded({
          extended: true,
        })
      );
      app.use(bodyParser.json());
    },
    after(app) {
      let db = {
        reports: [],
      };

      app.get("/api/v1/helth-reports", function(req, res) {
        res.json(db);
      });
      app.post("/api/v1/helth-reports", function(req, res) {
        db = req.body;

        res.sendStatus(200);
      });
    },
  },
  resolve: {
    // Add '.ts' and '.tsx' as resolvable extensions.
    extensions: [".ts", ".tsx", ".js", ".json"],
  },
  module: {
    rules: [
      // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
      {
        test: /\.tsx?$/,
        loader: "awesome-typescript-loader",
      },
      // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
      {
        enforce: "pre",
        test: /\.js$/,
        loader: "source-map-loader",
      },
      {
        test: /\.js$/,
        use: "babel-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        loaders: ["style-loader", "css-loader"],
      },
    ],
  },
};
