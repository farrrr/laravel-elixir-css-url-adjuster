var gulp = require('gulp');
var elixir = require('laravel-elixir');
var urlAdjuster = require('gulp-css-url-adjuster');
var files = [];

/*
 |----------------------------------------------------------------
 | adjust css urls for images and stuff
 |----------------------------------------------------------------
 |
 | A wrapper for gulp-css-url-adjuster.
 |
 */

elixir.extend('urlAdjuster', function(input, options, output) {

    files.push({
        input: input,
        options: options,
        output: output
    });

    var stream;

    gulp.task('urlAdjuster', function() {
        files.forEach(function(toUrlAdjust) {
            stream = gulp.src(toUrlAdjust.input)
                         .pipe(urlAdjuster(toUrlAdjust.options))
                         .pipe(gulp.dest(toUrlAdjust.output));
        });
        
        return stream;
    });

    return this.queueTask('urlAdjuster');
});
