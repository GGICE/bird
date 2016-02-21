var webpack = require("webpack");
var path = require("path");

module.exports = {
  entry: './src/app.js',
  output: {
    path: path.join(__dirname, "dist"),
    filename: 'build.js'
  },
  module: {
    loaders: [
      { test: /\.vue$/, loader: 'vue-loader'}
    ]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
        compress: {
            warnings: false
        }
    })
  ]
};
