/*created by huahua 28/12/2015 */

// import plugins
var gulp        = require('gulp');
var compass     = require('gulp-compass');
var browserSync = require('browser-sync');
var fileInclude = require('gulp-file-include');

// file path
var root                  = './',
    src                   = root + 'src/',
    rootHtmlFile          = src + 'view/*.html',
    rootJavascriptFile    = src + 'js/*.js',
    rootSassFile          = src + 'assets/sass/*.scss',
    rootSassFileDir       = src + 'assets/sass/',
    rootImageFile         = src + 'assets/images/**/*',
    previewDir = root + 'preview/';

// 2 compass set
gulp.task('compass', function() {
  gulp.src(rootSassFile)
   .pipe(compass({
      css: previewDir + 'assets/css/',
      sass: rootSassFileDir
    }))
});

// 3 content public html
gulp.task('fileinclude', function() {
  gulp.src(rootHtmlFile)
    .pipe(fileInclude({
      prefix: '@@',
      basepath: '@file'
    }))
    .pipe(gulp.dest(previewDir));
});

//4 copy image file
gulp.task('image', function() {
    gulp.src(rootImageFile)
        .pipe(gulp.dest(previewDir+'assets/images/'));
});


//5 copy lib js file
gulp.task('js', function() {
    gulp.src(rootJavascriptFile)
        .pipe(gulp.dest(previewDir+'js/'));
});

//1 Start the server


//6 Rerun the task when a file changes
gulp.task('watch', function(){
  gulp.task('browser-sync', function() {
    browserSync({
        server: {
            baseDir:  previewDir
        }
    });
});
  gulp.watch( rootSassFile,['compass']);
  gulp.watch( rootHtmlFile,['html']);
  gulp.watch( rootImageFile,['image']);
  gulp.watch( rootJavascriptFile,['js']);
  gulp.watch(previewDir + '**/*').on('change', browserSync.reload);
})

//default task
gulp.task('default',['compass','fileinclude','watch','js','image']);