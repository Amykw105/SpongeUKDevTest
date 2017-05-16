// Require plugins
const gulp = require('gulp'),
      sass = require('gulp-sass'),
      notify = require('gulp-notify'),
      minifyCSS = require('gulp-clean-css')


// Compile Sass
gulp.task('styles', function(){  
    gulp.src('app/scss/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(minifyCSS())
    .pipe(gulp.dest('./app/css/'))
    .pipe(notify({ message: 'Styles compiled' }));
});

// Watch files
gulp.task('watch', () => {
  gulp.watch('app/scss/*.scss', ['styles']);
});

// Run everything by default
gulp.task('default', ['styles', 'watch']);
