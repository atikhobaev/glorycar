var gulp = require('gulp'),
	less = require('gulp-less'),
	concatCSS = require('gulp-concat-css'),
	minifyCSS = require('gulp-minify-css'),
	rename = require("gulp-rename"),
	autoprefixer = require('gulp-autoprefixer');

//less
gulp.task('less', function() {
	gulp.src('./dev-folder/less/*.less')
    .pipe(less())
    .pipe(gulp.dest('./app/css/'));
});

//css
gulp.task('css', function() {
	gulp.src('./app/css/*.css')
    .pipe(concatCSS('style.css'))
    .pipe(autoprefixer({
            browsers: ['last 15 versions']
        }))
    .pipe(minifyCSS(''))
    .pipe(rename("style.min.css"))
    .pipe(gulp.dest('./app/css/'));
});

//default
gulp.task('default',['connect', 'html', 'less', 'css', 'watch']);