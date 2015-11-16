/*created by unique on 15/16/11*/

//import plugins
var gulp = require('gulp'),
    browserSync = require('browser-sync'),
    gulpLoadPlugins = require('gulp-load-plugins'),
    gulpCluder = require('gulp-utf8-convert'),
    plugins = gulpLoadPlugins();

//file path
var root = './',
    src = root + 'src/',
    previewDir = root +'preview/',
    rootHtmlFileDir = src +'view/'
    rootHtmlFile = src +'view/*.html',
    rootJavascriptDir = src +'js/'
    rootHtmlFile = src +'js/*.js',
    rootStyleFile = src +'assets/style/*.css',
    rootImageFile = src+'assets/images/**/*'
    distDir = root + 'dist/';


//content public html
gulp.task('content', function() {
         gulp.src('rootHtmlFile')
             .pipe(contentInclude({
                 includerReg:/<!\-\-include\s+"([^"]+)"\-\->/g
             }))
        .pipe(gulp.dest('previewDir'));
});


// copy style file
gulp.task('copy-style', function () {
    gulp.src(rootStyleFile)
        .pipe(gulp.dest(previewDir + 'assets/style/'));
});

//copy image file
gulp.task('copy-image', function() {
    gulp.src('rootImageFile')
        .pipe(gulp.dest(previewDir+'assets/images/'));
});


//copy lib js file
gulp.task('copy-lib', function() {
    gulp.src('rootJavascriptFile')
        .pipe(gulp.dest(previewDir+'js/'));
});

