define("main",
  ["renderer","shader","exports"],
  function(__dependency1__, __dependency2__, __exports__) {
    "use strict";
    /* global shader, r */
    var r = __dependency1__.renderer;
    var shader = __dependency2__;

    var main = function(el)  {

    	r.setDom(el);
    	r.init();

    	var frame = 0;

    	(function run () {
    		r.update(shader.col, frame++);
    		requestAnimationFrame(run);
    	}());
    }

    /*
    const curShader = shader.glsl;
    */
    __exports__.main = main;
  });