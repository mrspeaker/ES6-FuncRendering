/* global shader, r */
import { renderer as r } from "renderer";
module shader from "shader";

export let main = (el) => {

	r.dom = el;
	r.init();

	let frame = 0;
	(function run () {
		r.update(shader.glsl, frame++);
		requestAnimationFrame(run);
	}());

};
