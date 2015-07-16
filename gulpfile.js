var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var minifyCSS = require('gulp-minify-css');
var rename = require('gulp-rename');
var connect = require('gulp-connect');

gulp.task('sass', function() {
  return gulp.src('sass/**/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('css'));
});

gulp.task('styles', function() {
  return gulp.src(['css/libs/*.css', 'bower_components/minimal-devices/css/*.css', 'css/main.css'])
    .pipe(concat('all.css'))
    .pipe(gulp.dest('css'))
    .pipe(rename('all.min.css'))
    .pipe(minifyCSS())
    .pipe(gulp.dest('css'));
});

gulp.task('watch', function() {
  gulp.watch('sass/**/*.scss', ['sass']);
  gulp.watch('css/main.css', ['styles']);
});

gulp.task('connect', function() {
  connect.server({ livereload: true });
});

gulp.task('default', ['sass', 'styles', 'watch', 'connect']);