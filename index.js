var gulp = require('gulp');
var elixir = require('laravel-elixir');
var urlAdjuster = require('gulp-css-url-adjuster');

/*
 |----------------------------------------------------------------
 | adjust css urls for images and stuff
 |----------------------------------------------------------------
 |
 | A wrapper for gulp-css-url-adjuster.
 |
 */

elixir.extend('urlAdjuster', function(input, options, output) {

    gulp.task('urlAdjuster', function() {
        gulp.src(input)
            .pipe(urlAdjuster(options))
            .pipe(gulp.dest(output));
    });

    return this.queueTask('urlAdjuster');
});
