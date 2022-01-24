/*
Source: 
*/
function Module(stdlib, imports, buffer) {
	'use asm';
	var fround = stdlib.Math.fround;
	function f(a) {
		a = +a;
		return fround(+a);
	}
	function g(a) {
		a = +a;
		return +f(+a);
	}
	return {g: g};
}
var m = Module(this);
print(m.g(0.1));
