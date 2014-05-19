/* global shader, r */
import { renderer as r } from "renderer";
module shader from "shader";

export let main = (el) => {

	r.setDom(el);
	r.init();

	var frame = 0;

	(function run () {
		r.update(shader.col, frame++);
		requestAnimationFrame(run);
	}());
}

/*
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