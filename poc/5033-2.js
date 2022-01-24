/*
Source: 
*/
function test() {
	const t = Date.now();
	const o = { ['p'] : 1, t };
};

console.time('test');
for (var n = 0; n < 12291; n++) {
		test();
}
console.timeEnd('test');

However, if we change `var n` to `let n`, the safe number is only 6146:

function test() {
	const t = Date.now();
	const o = { ['p'] : 1, t };
};

console.time('test');
for (let n = 0; n < 6147; n++) {
		test();
}
console.timeEnd('test');