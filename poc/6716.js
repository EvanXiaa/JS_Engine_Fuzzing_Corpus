/*
Source: 
*/
function f() {
	print(arguments.length);
}
var a = Array(2**16).fill(null);
var bf = f.bind.apply(f, a);
bf();