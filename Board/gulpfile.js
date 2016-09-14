var gulp	        = require('gulp');
var sass	        = require('gulp-sass');
var connect         = require('gulp-connect');
var concat          = require('gulp-concat');
var cssMin          = require('gulp-css');
var uglify          = require('gulp-uglify');
var runSequence     = require('run-sequence').use( gulp );

gulp.task('connect', function() {
    connect.server({
        livereload: true
    });
});

gulp.task('sass', function() {
    return gulp.src('./sass/style.scss')
        .pipe( sass({ expended: true }).on( 'error', sass.logError ) )
        .pipe( gulp.dest('./css') )
        .pipe( connect.reload() )
});

gulp.task('watch',function(){
    gulp.watch('./sass/**/*.scss', function () {
        runSequence('sass');
        // runSequence('sass', 'css-min');
    });
    gulp.watch('./**/*.html', ['html']);
    gulp.watch('./js/**/*.js', ['js']);
});

gulp.task('html', function () {
    gulp.src('./index.html')
        .pipe( connect.reload() );
});

gulp.task('css-min', function(){
    return gulp.src([
        './css/style.css'
    ])
        .pipe( concat('style.min.css') )
        .pipe( cssMin() )
        .pipe( gulp.dest('./css') );
});

gulp.task('js', function () {
    gulp.src([
        './js/jquery-3.0.0.min.js',
        './js/swiper.min.js',
        './js/fb.js',
        './js/form.js',
        './js/ui.js'
    ])
        .pipe( concat('script.min.js') )
        .pipe( uglify() )
        .pipe( gulp.dest('./js') )});

gulp.task('default', ['watch', 'connect']);