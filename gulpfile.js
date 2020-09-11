//require methods
const {src, dest, watch, series, parallel} = require("gulp");
const concat = require("gulp-concat");
const uglify = require ("gulp-uglify-es").default; 
const cleanCss = require ("gulp-clean-css");
const imagemin = require ("gulp-imagemin");
const browserSync = require('browser-sync').create();
const del = require("del");

//paths
const files = {
    htmlPath: "src/**/*.html",
    cssPath: "src/**/*.css",
    jsPath: "src/**/*.js",
    imagesPath: "src/**/*.{gif,png,jpg,svg}"
}

//remove pub folder
function clean() {
    return del(['pub/']);
 }

// send HTML files to pub folder
function copyHTML () {
    return src(files.htmlPath)
        .pipe(dest('pub')
    );
}

//concat and minify js files- send to pub folder
function jsTask() {
    return src(files.jsPath)
        .pipe(concat('main.js')) 
        .pipe(uglify()) 
        .pipe(dest('pub/js') 
    );
}

//concat and minify css files- send to pub folder
function cssTask() {
    return src(files.cssPath)
        .pipe(concat('styles.css')) 
        .pipe(cleanCss()) 
        .pipe(dest('pub/css') 
    );
}

//minify images- send to pub folder
function imageTask() {
    return src(files.imagesPath)
    .pipe(imagemin())
    .pipe(dest('pub/')
    );
}

//watch changes and update browser
function watchTask() {
    browserSync.init({
        injectChanges: false,
        server: {
            baseDir: 'pub/'
        }
    });
        watch([files.htmlPath], copyHTML).on('change', browserSync.reload);
        watch([files.cssPath], cssTask).on('change', browserSync.reload);
        watch([files.jsPath], jsTask).on('change', browserSync.reload);
        watch([files.imagesPath], imageTask).on('change', browserSync.reload);

}

//export public tasks
exports.clean = clean;
exports.copyHTML = copyHTML;
exports.cssTask = cssTask;
exports.jsTask  = jsTask;
exports.imageTask = imageTask;
exports.watchTask = watchTask;

//default tasks
exports.default = series (
    clean,
    parallel(copyHTML, jsTask, cssTask, imageTask),
    watchTask
);