var gulp = require('gulp');
var tsc = require('gulp-tsc');

gulp.task('html', function() {
  return gulp
    .src('index.html')
    .pipe(gulp.dest('dist'));
});

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