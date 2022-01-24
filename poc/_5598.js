/*
Source: 
*/
function fn(a) {
	var [b] = a;
	return b;
}

fn('a');
fn('a');
%OptimizeFunctionOnNextCall(fn);
// print(fn('a'))
fn('a');