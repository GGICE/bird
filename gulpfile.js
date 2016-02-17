var gulp = require('gulp');
var webpack = require('webpack-stream');
var webpackDevServer = require("webpack-dev-server");
var gutil = require("gulp-util");

var config = {
  output: {
    filename: 'build.js'
  },
  module: {
    loaders: [
      { test: /\.vue$/, loader: 'vue'}
    ]
  }
};

gulp.task('default', function() {
  return gulp.src('src/app.js')
    .pipe(webpack(config))
    .pipe(gulp.dest('dist/'));
});

// gulp.task("dev", function(callback) {
//   var compiler = webpack(config);
//   new webpackDevServer(compiler, {
//   }).listen(9201, "localhost", function(err) {
//     if(err) throw new gutil.PluginError("webpack-dev-server", err);
//       gutil.log("[webpack-dev-server]", "http://localhost:9201/webpack-dev-server/index.html");
//   });
// });
