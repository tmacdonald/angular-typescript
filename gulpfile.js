var gulp = require('gulp');
var tsc = require('gulp-tsc');

gulp.task('scripts', function() {
  return gulp
    .src(['scripts/*.ts'])
    .pipe(tsc({
      module: "CommonJS",
      sourcemap: true,
      emitError: false
    }))
    .pipe(gulp.dest('dist'));
});