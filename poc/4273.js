/*
Source: 
*/
function foo() { m.arguments[0] = "x"; }
function m(x) {
	"use asm";
	var f = foo;
	function bar() {
		f();
		for (var y = 1; y < 1000000; y++) {
		}
		return x + 1;
	}
	return bar();
}
print(m(1, 2));