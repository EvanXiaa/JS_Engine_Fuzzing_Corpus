/*
Source: 
*/
for (var i = 0; i < 2; ++i) {
	(function(i) {

		function foo() {
			print("test");
		}
		function bar(){};
		%SetCode(bar, foo);

		foo();
		if (i == 0) {
			%OptimizeFunctionOnNextCall(foo);
		}

	})(i);
}