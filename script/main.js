(function (renderer) {

	function main (el) {

		renderer.setDom(el);
		renderer.init();

		var frame = 0;

		(function run () {
			renderer.update(null, frame++);
			requestAnimationFrame(run);
		}());
	}

	window.main = main;

}(window.renderer));

/* global shader, r
import { renderer as r } from "renderer";
module shader from "shader";

const curShader = shader.glsl;

export let main = (el) => {

	r.dom = el;
	r.init();

	let frame = 0;
	(function run () {
		r.update(curShader, frame++);
		requestAnimationFrame(run);
	}());

};
*/