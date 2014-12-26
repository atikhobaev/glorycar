var gulp = require('gulp'),
	less = require('gulp-less'),
	concatCSS = require('gulp-concat-css'),
	minifyCSS = require('gulp-minify-css'),
	rename = require("gulp-rename"),
	autoprefixer = require('gulp-autoprefixer'),
    connect = require('gulp-connect');

//connect
gulp.task('connect', function() {
  connect.server({
    root: 'app',
    livereload: true
  });
});

//html
gulp.task('html', function () {
  gulp.src('./app/*.html')
    .pipe(connect.reload());
});

//less
gulp.task('less', function() {
	gulp.src('./app/less/*.less')
    .pipe(less())
    .pipe(gulp.dest('./app/css/dev/'))
});

//css
gulp.task('css', function() {
	gulp.src('./app/css/dev/*.css')
    .pipe(concatCSS('style.min.css'))
    .pipe(autoprefixer({
            browsers: ['last 15 versions']
        }))
    .pipe(minifyCSS(''))
    .pipe(rename("style.min.css"))
    .pipe(gulp.dest('./app/css/'))
    .pipe(connect.reload());
});

//watch
gulp.task('watch', function () {
    gulp.watch(['./app/*.html'], ['html']);
    gulp.watch(['./app/less/*.less'], ['less']);
    gulp.watch(['./app/css/dev/*.css'], ['css']);
});


//default
gulp.task('default',['connect', 'html', 'less', 'css', 'watch']);