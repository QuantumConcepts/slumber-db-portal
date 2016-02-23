"use strict";

const gulp = require("gulp");
const sourcemaps = require("gulp-sourcemaps");
const babel = require("gulp-babel");
const sass = require("gulp-sass");

const wwwroot = "./wwwroot";
const scssFiles = function () {
    var sourceRoot = "./styles";
    var sourceFiles = sourceRoot + "/**/*.scss";
    var sourceIgnore = "!" + sourceRoot + "/variables.scss";
    var destRoot = wwwroot + "/styles";
    
    return {
        source: [sourceFiles, sourceIgnore],
        dest: destRoot
    };
}();
const jsFiles = function () {
    var sourceRoot = "./scripts";
    var sourceFiles = sourceRoot + "/**/*.js";
    var destRoot = wwwroot + "/scripts";
    
    return {
        source: [sourceFiles],
        dest: destRoot
    };
}();

gulp.task("compile:js", () => {
    return gulp
        .src(jsFiles.source)
        .pipe(sourcemaps.init())
        .pipe(babel({
            presets: ["es2015"]
        }))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(jsFiles.dest));
});

gulp.task("compile:scss", () => {
    return gulp
        .src(scssFiles.source)
        .pipe(sourcemaps.init())
        .pipe(sass().on("error", sass.logError))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(scssFiles.dest));
});

gulp.task("watch:js", () => {
    gulp.watch(jsFiles.source, ["compile:js"]);
});

gulp.task("watch:scss", () => {
    gulp.watch(scssFiles.source, ["compile:scss"]);
});

gulp.task("build", ["compile:js", "compile:scss"]);
gulp.task("build-watch", ["build", "watch"]);
gulp.task("watch", ["watch:js", "watch:scss"]);