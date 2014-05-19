import { matrix } from "grid";

export let renderer = {

	el: null,

	set dom (el) {
		this.el = el;
	},

	init () {
		let {el} = this;
		this.ctx = el.getContext("2d");
		this.w = el.width;
		this.h = el.height;
		this.imgData = this.ctx.createImageData(this.w, this.h);
	},

	putPixel ([r, g, b], x = 0, y = 0) {
		let {w, imgData} = this,
			idx = (y * w + x) * 4,
			img = imgData.data;

		img[idx] = r;
		img[idx + 1] = g;
		img[idx + 2] = b;
		img[idx + 3] = 255;
	},

	update (shader, time) {
		let {w, h} = this,
			clamp = (v) => Math.min(1, Math.max(0, v)),
			scale = (v) => v * 255;

		for (let {x, y} of matrix(w, h)) {
			let pix = shader({
					x,
					y,
					xr: x / w,
					yr: y / h,
					t: time
				})
				.map(clamp)
				.map(scale);

			this.putPixel(pix, x, y);
		}

		this.ctx.putImageData(this.imgData, 0, 0);

	}

}
