
function* range(from, to) {
	let i = from;
	while (i < to) {
		yield i++;
	}
};

// Possibly - matrix of any dimenstions? with ...dimestions param
function* matrix(w, h) {
	for (let y of range(0, h)) {
		for (let x of range(0, w)) {
			yield {x, y};
		}
	}
}
//let matrix = (w, h) => (for (y of range(0, h)) for (x of range(0, w)) {x: x, y: y});

export { matrix };
