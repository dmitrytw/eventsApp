"use strict";

var gulp = require('gulp'),
  autoprefixer = require('gulp-autoprefixer'),
	livereload = require('gulp-livereload'),
	connect = require('gulp-connect');

//html
gulp.task('html', function () {
  gulp.src('public/*.html')
    .pipe(connect.reload());
});

//js
gulp.task('js', function () {
  gulp.src('public/*.js')
    .pipe(connect.reload());
});

//css
gulp.task('css', function () {
  gulp.src('public/css/*.css')
    .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
    .pipe(connect.reload());
});

//server connect
gulp.task('connect', function() {
  connect.server({
    root: '',
    livereload: true
  });
});


//watch
gulp.task('watch', function() {
	gulp.watch('public/*.js', ['js'])
	gulp.watch('public/*.css', ['css'])
  gulp.watch('public/*.html', ['html'])

});

//default
gulp.task('default', ['connect', 'html', 'js', 'css', 'watch']);