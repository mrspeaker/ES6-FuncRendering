define("renderer",
  ["grid","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var matrix = __dependency1__.matrix;

    var renderer = {

    	el: null,

    	set dom (el) {
    		this.el = el;
    	},

    	init: function () {
    		var el = (this).el;
    		this.ctx = el.getContext("2d");
    		this.w = el.width;
    		this.h = el.height;
    		this.imgData = this.ctx.createImageData(this.w, this.h);
    	},

    	putPixel: function (b) {var r = b[0], g = b[1], b = b[2];var x = arguments[1];if(x === void 0)x = 0;var y = arguments[2];if(y === void 0)y = 0;
    		var w = (imgData = this).w, imgData = imgData.imgData,
    			idx = (y * w + x) * 4,
    			img = imgData.data;

    		img[idx] = r;
    		img[idx + 1] = g;
    		img[idx + 2] = b;
    		img[idx + 3] = 255;
    	},

    	update: function (shader, time) {function GET_ITER$0(v){if(v){if(Array.isArray(v))return 0;if(typeof v==='object'&&typeof v['@@iterator']==='function')return v['@@iterator']();}throw new Error(v+' is not iterable')};var $D$0;var $D$1;var $D$2;var $D$3;
    		var w = (h = this).w, h = h.h,
    			clamp = function(v)  {return Math.min(1, Math.max(0, v))},
    			scale = function(v)  {return v * 255};

    		var x, y;$D$3 = (matrix(w, h));$D$0 = GET_ITER$0($D$3);$D$2 = $D$0 === 0;$D$1 = ($D$2 ? $D$3.length : void 0);for ( ; $D$2 ? ($D$0 < $D$1) : !($D$1 = $D$0["next"]())["done"]; ){;x = (y = ($D$2 ? $D$3[$D$0++] : $D$1["value"])).x, y = y.y;
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
    		};$D$0 = $D$1 = $D$2 = $D$3 = void 0;

    		this.ctx.putImageData(this.imgData, 0, 0);

    	}

    }

    __exports__.renderer = renderer;
  });