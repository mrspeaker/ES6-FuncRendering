define("main",
  ["renderer","shader","exports"],
  function(__dependency1__, __dependency2__, __exports__) {
    "use strict";
    /* global shader, r */
    var r = __dependency1__.renderer;
    var shader = __dependency2__;

    var main = function(el)  {

    	r.dom = el;
    	r.init();

    	var frame = 0;
    	(function run () {
    		r.update(shader.glsl, frame++);
    		requestAnimationFrame(run);
    	}());

    };
    __exports__.main = main;
  });