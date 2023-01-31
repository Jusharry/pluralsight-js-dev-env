import path from "path";

export default {
  mode: "development",
  devtool: "eval-source-map",
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "src"), //no files actually created in dev mode.
    publicPath: "/",                      //Files are served from this directory from memory
    filename: "bundle.js",
    //hashFunction:"xxhash64" // doesnt work
    //hashFunction:"sha512"  //doesnt work
  },
  /*
  experiments:{
    futureDefaults: true  // not working currently
  },*/
  plugins: [],
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, use: ["babel-loader"] },
      { test: /\.css$/, use: ["style-loader", "css-loader"] },
    ],
  },
};
