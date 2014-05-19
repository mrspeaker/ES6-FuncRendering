define("main",
  ["renderer","shader","exports"],
  function(__dependency1__, __dependency2__, __exports__) {
    "use strict";
    /* global shader, r */
    var r = __dependency1__.renderer;
    var shader = __dependency2__;

    var curShader = shader.col;

    var main = function(el)  {

    	r.dom = el;
    	r.init();

    	var frame = 0;
    	(function run () {
    		r.update(curShader, frame++);
    		requestAnimationFrame(run);
    	}());

    };
    __exports__.main = main;
  });