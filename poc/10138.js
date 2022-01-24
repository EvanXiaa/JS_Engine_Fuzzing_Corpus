/*
Source: 
*/
function innerFn(a) {
	let arr = [a, 1,2,3];
	return arr.forEach( x => x * 2);
}

function outerFn() {
	for(let i = 0; i < 100000; ++i) innerFn(0);
	for(let i = 0; i < 100000; ++i) innerFn(null);
}

outerFn();