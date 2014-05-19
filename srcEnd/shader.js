
let glsl = ({xr, yr, t}) => {
	let {sin, cos} = Math,
		s = 0;

	s += sin(xr * cos(t / 300) * 80) + cos(yr * cos(t / 300) * 10);
	s += sin(yr * sin(t / 200) * 40) + cos(xr * sin(t / 500) * 40);
	s += sin(xr * sin(t / 100) * 10) + sin(yr * sin(t / 600) * 80);
	s *= sin(t / 200) * 0.5;

	return [s, s * 0.5, sin(s + t / 30) * 0.75];
};

let circle = ({xr, yr, t}) => {
	let {sin, hypot} = Math,
		xo = 0.5 - xr,
		yo = 0.35 + (sin(t / 40)) * 0.5 - yr,
		dist = hypot(xo, yo)

	let s = dist < 0.15 ? 0.8 : 0;

	return [s, s, s * 0.2];
}

let sindot = ({xr, yr, t}) => {

	let s = (Math.sin(t / 100) + xr * yr);

	return [s, s, s];
}

export { glsl, circle, sindot };
