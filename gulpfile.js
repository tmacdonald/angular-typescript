var gulp = require('gulp');
var nodemon = require('nodemon');
var tsc = require('gulp-tsc');

var paths = {
  scripts: ['scripts/*.ts']
};

gulp.task('html', function() {
  return gulp
    .src('index.html')
    .pipe(gulp.dest('dist'));
});

gulp.task('scripts', function() {
  return gulp
    .src(paths.scripts)
    .pipe(tsc({
      module: "CommonJS",
      sourcemap: true,
      emitError: false,
      out: 'bundle.js'
    }))
    .pipe(gulp.dest('dist'));
});

gulp.task('start', function() {
  nodemon({
    script: 'server.js',
    ext: 'js'
  });
});

gulp.task('watch', function() {
  return gulp.watch(paths.scripts, ['scripts']);
});