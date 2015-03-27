/**
 * Created by reljicd on 3/27/15.
 */

/*jshint globalstrict:true, devel:true, newcap:false */
/*global require */

/**
 * Build CSS and JavaScript using `gulp`.
 *
 * Main targets are: `js`, `css` and `watch`.
 *
 * Run with `--production` to get minified sources.
 */

"use strict";

// grab our packages
var argv = require('yargs').argv,

    gulp = require('gulp'),
    gutil = require('gulp-util'),
    gulpif = require('gulp-if'),

    source = require('vinyl-source-stream'),
    buffer = require('vinyl-buffer'),
    sourcemaps = require('gulp-sourcemaps'),
    browserify = require('browserify'),
    watchify = require('watchify'),
    reactify = require('reactify'),
    uglify = require('gulp-uglify'),

    less = require('gulp-less'),
    minifyCSS = require('gulp-minify-css');

// Directory where source files are found. Don't forget the slash at the end.
var sourceDirectory = './src/',
// Directory where compiled files are found. Don't forget the slash at the end.
    outputJsDirectory = './dist/js/',
    outputCSSDirectory = './dist/css/',

// Source and target JS files for Browserify
    jsMainFile = sourceDirectory + 'js/app.js',
    jsBundleFile = 'bundle.js',

// Source and target LESS files
    cssMainFile = sourceDirectory + 'less/styles.less',
    cssFiles = sourceDirectory + 'less/**/*.less';

// Browserify bundler, configured for reactify with sources having a .jsx extension
var bundler = browserify({
    entries: [jsMainFile],
    transform: [reactify],
    extensions: ['.jsx'],
    debug: !argv.production,
    cache: {}, packageCache: {}, fullPaths: true // for watchify
});

// Build JavaScript using Browserify
gulp.task('js', function () {
    return bundler
        .bundle()
        // log errors if they happen
        .on('error', gutil.log.bind(gutil, 'Browserify Error'))
        .pipe(source(jsBundleFile))
        .pipe(buffer())
        .pipe(gulpif(!argv.production, sourcemaps.init({loadMaps: true}))) // loads map from browserify file
        .pipe(gulpif(!argv.production, sourcemaps.write('./'))) // writes .map file
        .pipe(gulpif(argv.production, uglify()))
        .pipe(gulp.dest(outputJsDirectory));
});

// Build CSS
gulp.task('css', function () {
    gutil.log("Building CSS files");

    return gulp.src(cssMainFile)
        .pipe(less())
        .pipe(gulpif(argv.production, minifyCSS({keepBreaks: true})))
        .pipe(gulp.dest(outputCSSDirectory));
});

// Watch JS + CSS using watchify + gulp.watch

gulp.task('watchify', function () {
    gutil.log("Creating the initial watchify bundle");

    var watcher = watchify(bundler);
    return watcher
        .on('error', gutil.log.bind(gutil, 'Browserify Error'))
        .on('update', function () {
            watcher.bundle()
                .pipe(source(jsBundleFile))
                .pipe(buffer())
                .pipe(sourcemaps.init({loadMaps: true})) // loads map from browserify file
                .pipe(sourcemaps.write('./')) // writes .map file
                .pipe(gulp.dest(outputJsDirectory));

            gutil.log("Updated JavaScript sources");
        })
        .bundle() // Create the initial bundle when starting the task
        .pipe(source(jsBundleFile))
        .pipe(gulp.dest(outputJsDirectory));

});

gulp.task('csswatch', function () {
    gulp.watch(cssFiles, ['css']);
});

gulp.task('watch', ['watchify', 'csswatch']);
gulp.task('default', ['js', 'css']);