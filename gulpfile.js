/* global require */
"use strict";

var stage = 2;

var gulp = require("gulp"),
	gutil = require("gulp-util"),
	es6transpiler = require("gulp-es6-transpiler"),
	es6modules = require("gulp-es6-module-transpiler");

gulp.task("default", function () {
	gulp.start("es62es5");
});

var src = "";
if (stage == 1) {
	src = "src/**/*.js";

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
}
else {
	src = "src2/**/*.js";

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
			.pipe(es6modules({
				type: "amd"
			}))
			.on("error", gutil.log)
			.pipe(gulp.dest("script"));
	});
}

gulp.task("watch", function() {
	gulp.start("default");
	gulp.watch(src, ["es62es5"]);
});



