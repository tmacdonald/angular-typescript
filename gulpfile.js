var gulp = require('gulp');
var nodemon = require('nodemon');
var jasmine = require('gulp-jasmine');
var sourcemaps = require('gulp-sourcemaps');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var tsc = require('gulp-tsc');
var typescript = require('gulp-typescript');

var paths = {
  scripts: ['scripts/*.ts'],
  tests: ['scripts/spec/*.js']
};

gulp.task('html', function() {
  return gulp
    .src('index.html')
    .pipe(gulp.dest('dist'));
});

gulp.task('scripts', function() {
  return gulp
    .src(paths.scripts)
    .pipe(sourcemaps.init())
      .pipe(typescript())
      .pipe(uglify())
      .pipe(concat('bundle.min.js'))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('dist'));
});

gulp.task('test', function() {
  return gulp.src(paths.tests)
    .pipe(jasmine());
});

gulp.task('start', ['watch'], function() {
  nodemon({
    script: 'server.js',
    ext: 'js'
  });
});

gulp.task('watch', function() {
  return gulp.watch(paths.scripts, ['scripts']);
});