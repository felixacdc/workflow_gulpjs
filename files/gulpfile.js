const gulp = require('gulp');
const sass = require('gulp-sass');

gulp.task('saludar', () => {
    console.log('Hola mundo');
});

gulp.task('sass', () => {
    return gulp.src('scss/main.scss')
    .pipe(sass())
    .pipe(gulp.dest('app/css'));
});