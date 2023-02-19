// npm i -> gulp
const {watch, series, parallel} = require("gulp");
const browserSync = require("browser-sync").create();
const path = require("./gulp/config/path.js");

// task
const clear = require('./gulp/task/clear.js');
const html = require('./gulp/task/html.js');
const scss = require('./gulp/task/scss.js');
const js = require('./gulp/task/js.js');
const img = require('./gulp/task/img.js');
const font = require('./gulp/task/font.js');

// server 
const server = function() {
	browserSync.init({
		server: path.root,
		notify: false,
		online: true
	});
}

// watch 
const watcher = function() {
	watch(path.html.watch, html).on("all", browserSync.reload);
	watch(path.html.watch, scss).on("all", browserSync.reload);
	watch(path.scss.watch, scss).on("all", browserSync.reload);
	watch(path.js.watch, js).on("all", browserSync.reload);
	watch(path.img.watch, img).on("all", browserSync.reload);
	watch(path.font.watch, font).on("all", browserSync.reload);
}

// start
exports.default = series(
	clear,
	parallel(html, scss, js, img, font),
	parallel(watcher, server)
);