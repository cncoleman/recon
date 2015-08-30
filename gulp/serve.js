var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var $ = require("gulp-load-plugins")();

gulp.task('serve', ['watch'], function() {
  browserSync.init(['.tmp/styles/*.css','app/images/**/*'],{ server: { baseDir: ['app','.tmp'] } });
  $.watch([
   ".tmp/*.html",
   ".tmp/scripts/**/*.js",
   ".tmp/scripts/*.js",
   ".tmp/partials/**/*.html",
   ".tmp/partials/*.html",
   ".tmp/partials/**/*.js",
   ".tmp/partials/*.js"],
   $.batch(function (events, done) { browserSync.reload(); done(); }));
});

gulp.task('serve:dist', function() {
  browserSync.init({ server: { baseDir: 'dist' } });
});
