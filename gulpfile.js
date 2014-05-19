/* global require */
"use strict";

var gulp = require("gulp"),
	gutil = require("gulp-util"),
	es6transpiler = require("gulp-es6-transpiler"),
	es6modules = require("gulp-es6-module-transpiler");

gulp.task("default", function () {
	gulp.start("es62es5");
});

var src = "src/**/*.js";
var src2 = "src/**/*.js";

gulp.task("es62es5", function () {
	gulp.src(src)
		.pipe(es6transpiler({
			"devel": true,
			"globals": {
				requestAnimationFrame: true,
				frame: true
			}
		}))
		.on("error", gutil.log)
		.pipe(gulp.dest("script"));
});

gulp.task("watch", function() {
	gulp.start("default");
	gulp.watch(src, ["es62es5"]);
});

/*
gulp.task("es62es5", function () {
	gulp.src(src2)
		.pipe(es6transpiler({
			"devel": true,
			"globals": {
				requestAnimationFrame: true,
				frame: true
			}
		}))
		.on("error", gutil.log)
		.pipe(es6modules({
			type: "amd"
		}))
		.on("error", gutil.log)
		.pipe(gulp.dest("script"));
});

gulp.task("watch", function() {
	gulp.start("default");
	gulp.watch(src2, ["es62es5"]);
});
*/
