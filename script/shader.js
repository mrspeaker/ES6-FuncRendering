define("shader",
  ["exports"],
  function(__exports__) {
    "use strict";

    var glsl = function(t)  {var xr = t.xr, yr = t.yr, t = t.t;
    	var sin = Math.sin, cos = Math.cos,
    		s = 0;

    	s += sin(xr * cos(t / 300) * 80) + cos(yr * cos(t / 300) * 10);
    	s += sin(yr * sin(t / 200) * 40) + cos(xr * sin(t / 500) * 40);
    	s += sin(xr * sin(t / 100) * 10) + sin(yr * sin(t / 600) * 80);
    	s *= sin(t / 200) * 0.5;

    	return [s, s * 0.5, sin(s + t / 30) * 0.75];
    };

    var circle = function(t)  {var xr = t.xr, yr = t.yr, t = t.t;
    	var sin = Math.sin, hypot = Math.hypot,
    		xo = 0.5 - xr,
    		yo = 0.35 + (sin(t / 40)) * 0.5 - yr,
    		dist = hypot(xo, yo)

    	var s = dist < 0.15 ? 0.8 : 0;

    	return [s, s, s * 0.2];
    }

    __exports__.glsl = glsl;
    __exports__.circle = circle;
  });