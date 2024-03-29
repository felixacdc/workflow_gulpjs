const gulp = require('gulp');
const sass = require('gulp-sass');
var browserSync = require('browser-sync').create();

gulp.task('serve', ['sass'], function() {

    browserSync.init({
        server: "./app"
    });

    gulp.watch("scss/**/*.scss", ['sass']);
    //gulp.watch("app/*.html").on('change', browserSync.reload);
});

gulp.task('sass', () => {
    return gulp.src('scss/**/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('app/css'))
    .pipe(browserSync.stream());
});

gulp.task('observar', () => {
    gulp.watch('scss/**/*.scss', ['sass'])
});