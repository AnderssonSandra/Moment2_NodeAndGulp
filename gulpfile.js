//require methods
const {src, dest, watch, series, parallel} = require("gulp");
const concat = require("gulp-concat");
const uglify = require ("gulp-uglify-es").default; 
const cleanCss = require ("gulp-clean-css");
const imagemin = require ("gulp-imagemin");

//paths
const files = {
    htmlPath: "src/**/*.html",
    cssPath: "src/**/*.css",
    jsPath: "src/**/*.js",
    imagesPath: "src/**/*.{gif,png,jpg,svg}"
}

//copy HTML files
function copyHTML () {
    return src(files.htmlPath)
        .pipe(dest('pub')
    );
}

//concat and minify js files
function jsTask() {
    return src(files.jsPath)
        .pipe(concat('main.js')) 
        .pipe(uglify()) 
        .pipe(dest('pub/js') 
    );
}

//cancat and minify css files
function cssTask() {
    return src(files.cssPath)
        .pipe(concat('styles.css')) 
        .pipe(cleanCss()) 
        .pipe(dest('pub/css') 
    );
}

//minify images 
function imageTask() {
    return src(files.imagesPath)
    .pipe(imagemin())
    .pipe(dest('pub/')
    );
}

//watcher
function watchTask() {
    watch([files.htmlPath, files.jsPath, files.cssPath, files.imagesPath],
        parallel(copyHTML, jsTask, cssTask, imageTask)
    );
}

//default task
exports.default = series (
    parallel(copyHTML, jsTask, cssTask, imageTask),
    watchTask
);