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
      {
        test: /.(jsx|js)?$/,
        include: path.join(__dirname, 'src'),
        loaders: ['react-hot', 'babel-loader']
      }
    ]
  },
  devServer: {
      historyApiFallback: true
  },
  plugins: [
  ]
};