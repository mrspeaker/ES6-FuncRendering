/* global shader, r */

(function (renderer, col) {

	function main (el) {

		renderer.setDom(el);
		renderer.init();

		var frame = 0;

		(function run () {
			renderer.update(col, frame++);
			requestAnimationFrame(run);
		}());
	}

	window.main = main;

}(window.renderer, window.col));

