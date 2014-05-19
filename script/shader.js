define("shader",
  ["exports"],
  function(__exports__) {
    "use strict";
    var col = function(pos)  {
    	var s = pos.xr * pos.yr;

    	return [s, s, s];
    }

    __exports__.col = col;
  });