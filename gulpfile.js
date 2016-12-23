var gulp = require('gulp');
var uncss = require('gulp-uncss');

gulp.task('uncss', function () {
    return gulp.src('css/support2.css')
        .pipe(uncss({
            html: ['index.html'],
        }))
        .pipe(gulp.dest('dist/'));
});