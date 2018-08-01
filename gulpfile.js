var gulp = require('gulp'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    browserSync = require('browser-sync').create();

gulp.task('sass', function() {
    gulp.src('./scss/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer([
            'last 15 versions',
            '> 1%',
            'ie 8',
            'ie 7'
        ], { cascade: true }))
        .pipe(gulp.dest('./css'))
        .pipe(browserSync.stream());
});

gulp.task('serve', ['sass'], function() {
    browserSync.init({
        server: './'
    });

    gulp.watch('./scss/*.scss', ['sass']);
    gulp.watch('./*.html').on('change', browserSync.reload);
});

gulp.task('default', ['serve']);
