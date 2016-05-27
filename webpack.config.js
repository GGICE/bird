var webpack = require("webpack");
var path = require("path");

module.exports = {
  entry: ['./src/app.js'],
  output: {
    path: path.join(__dirname, "dist"),
    filename: 'build.js',
    publicPath: '/'
  },
  module: {
    loaders: [
      {
        test: /.(jsx|js)?$/,
        include: path.join(__dirname, 'src'),
        loaders: ['react-hot', 'babel-loader']
      },
      {
        test: /\.sass$/,
        loaders: ['style', 'css', 'sass']
      }
    ]
  },
  devServer: {
      historyApiFallback: true
  },
  plugins: [
  ]
};
