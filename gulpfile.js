var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('styles', function(){
    gulp.src('src/sass/styles.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./src/css/'));
});

//Watching for changes in file
gulp.task('default', function(){
    gulp.watch('src/sass/styles.scss', ['styles']);
});
