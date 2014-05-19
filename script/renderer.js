define("renderer",
  ["exports"],
  function(__exports__) {
    "use strict";
    var renderer = {

    	el: null,

    	setDom: function (el) {
    		this.el = el;
    	},

    	init: function () {
    		this.ctx = this.el.getContext("2d");
    		this.w = this.el.width;
    		this.h = this.el.height;
    		this.imgData = this.ctx.createImageData(this.w, this.h);
    	},

    	putPixel: function (col, x, y) {
    		var idx = (y * this.w + x) * 4,
    			img = this.imgData.data;

    		img[idx] = col[0];
    		img[idx + 1] = col[1]
    		img[idx + 2] = col[2];
    		img[idx + 3] = 255;
    	},

    	update: function (shader, time) {
    		var w = this.w,
    			h = this.h,
    			x,
    			y,
    			clamp = function (v) {
    				return Math.min(1, Math.max(0, v));
    			},
    			scale = function (v) {
    				return v * 255
    			};

    		for (y = 0; y < h; y++) {
    			for (x = 0; x < w; x++) {
    				var pix = shader({
    					x: x,
    					y: y,
    					xr: x / w,
    					yr: y / h,
    					t: time
    				})
    				.map(clamp)
    				.map(scale);

    				this.putPixel(pix, x, y);
    			}
    		}

    		this.ctx.putImageData(this.imgData, 0, 0);

    	}
    };
    __exports__.renderer = renderer;
  });