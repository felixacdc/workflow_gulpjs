const gulp = require('gulp');
const sass = require('gulp-sass');

gulp.task('saludar', () => {
    console.log('Hola mundo');
});

gulp.task('sass', () => {
    return gulp.src('scss/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('app/css'));
});

gulp.task('observar', () => {
    gulp.watch('scss/*.scss', ['sass'])
});