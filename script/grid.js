define("grid",
  ["exports"],
  function(__exports__) {
    "use strict";

    function* range(from, to) {
    	var i = from;
    	while (i < to) {
    		yield i++;
    	}
    };

    // Possibly - matrix of any dimenstions? with ...dimestions param
    function* matrix(w, h) {function GET_ITER$0(v){if(v){if(Array.isArray(v))return 0;if(typeof v==='object'&&typeof v['@@iterator']==='function')return v['@@iterator']();}throw new Error(v+' is not iterable')};var $D$0;var $D$1;var $D$2;var $D$3;var $D$4;var $D$5;var $D$6;var $D$7;
    	$D$3 = (range(0, h));$D$0 = GET_ITER$0($D$3);$D$2 = $D$0 === 0;$D$1 = ($D$2 ? $D$3.length : void 0);for (var y ; $D$2 ? ($D$0 < $D$1) : !($D$1 = $D$0["next"]())["done"]; ){y = ($D$2 ? $D$3[$D$0++] : $D$1["value"]);
    		$D$7 = (range(0, w));$D$4 = GET_ITER$0($D$7);$D$6 = $D$4 === 0;$D$5 = ($D$6 ? $D$7.length : void 0);for (var x = void 0 ; $D$6 ? ($D$4 < $D$5) : !($D$5 = $D$4["next"]())["done"]; ){x = ($D$6 ? $D$7[$D$4++] : $D$5["value"]);
    			yield {x: x, y: y};
    		};$D$4 = $D$5 = $D$6 = $D$7 = void 0;
    	};$D$0 = $D$1 = $D$2 = $D$3 = void 0;
    }
    //let matrix = (w, h) => (for (y of range(0, h)) for (x of range(0, w)) {x: x, y: y});

    __exports__.matrix = matrix;
  });