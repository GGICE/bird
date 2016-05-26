/**
* Dev: gulp dev
* Release: gulp build
* Release code: ./dist
**/

var gulp = require('gulp');
var webpack = require('webpack');
var webpackDevServer = require('webpack-dev-server');
var gutil = require('gulp-util');
var config = require('./webpack.config');

function buildAll() {
  gulp.src('./index.html')
    .pipe(gulp.dest('./dist'));
}

gulp.task('build', function() {
  var myConfig = Object.create(config);

  myConfig.plugins.push(
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
    }}) 
  )
  webpack(myConfig, function(err, stats) {
    if (err) throw new gutil.PluginError('build', err);
    gutil.log('[build]', stats.toString({
      colors: true
    }));
    buildAll();
  });
});

gulp.task('dev', function(callback) {
  var myConfig = Object.create(config);

  myConfig.devtool = ['eval', 'source-map'];
  myConfig.debug = true;
  myConfig.entry.push( 'webpack-dev-server/client?http://localhost:9500', // WebpackDevServer host and port
    'webpack/hot/only-dev-server'// "only" prevents reload on syntax errors
  )
  myConfig.plugins.push(new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process.env': JSON.stringify('dev')
  }))

  new webpackDevServer(webpack(myConfig), {
    stats: {
      colors: true
    },
    hot: true
  }).listen('9500', 'localhost', function(err) {
    if (err) {
      throw new gutil.PluginError('webpack-dev-server', err);
    }
    gutil.log('[webpack-dev-server]', 'http://localhost:9500/webpack-dev-server/');
  });
});
