var gulp = require('gulp');
var webpack = require('webpack');
var webpackDevServer = require("webpack-dev-server");
var gutil = require("gulp-util");
var config = require('./webpack.config');

function buildAll() {
    gulp.src('./index.html')
      .pipe(gulp.dest('./dist'));
}

gulp.task('build', function() {
  var myConfig = Object.create(config);
  webpack(myConfig, function(err, stats) {
    if (err) throw new gutil.PluginError("build", err);
    gutil.log("[build]", stats.toString({
      colors: true
    }));
    buildAll();
  });
});

gulp.task('dev', function(callback) {
  var myConfig = Object.create(config);

  myConfig.devtool = 'eval';
  myConfig.debug = true;

  new webpackDevServer(webpack(myConfig), {
    stats: {
      colors: true
    }
  }).listen('9200', 'localhost', function(err) {
    if (err) {
      throw new gutil.PluginError('webpack-dev-server', err);
    }
    gutil.log('[webpack-dev-server]', 'http://localhost:9200/webpack-dev-server/index.html');
  });
});
