/*
Source: 
*/
var GeneratorFunctionPrototype = Object.getPrototypeOf(function*(){});

function AsyncResult(val) {
	this.value = val;
	this.done = false;
}

function run_recursive_generator(g) {
	var result = { value: undefined, done: false }
	do {
		result = g.send(result.value);
		if (result.value instanceof AsyncResult) {
			result = result.value;
		} else if (result.value instanceof GeneratorFunctionPrototype) {
			result.value = run_recursive_generator(result.value);
		}
	} while (!result.done);

	return result.value;
}

function fib(n) {
	return n <= 1 ? 1 : fib(n - 1) + fib(n - 2);
}

function* fibo(nn) {
	function async_result(args) {
		// It seems that to provoke this bug we need an allocation that
		// crankshaft won't optimize away.
		args[0] = new Array();
		return new AsyncResult(undefined);
	}
	yield async_result([]);
	if (nn <= 1) return 1;
	return (yield fibo(nn - 1)) + (yield fibo(nn - 2));
}

function* test_generator(g, expected) {
	var t0 = Date.now();
	var result = yield g;
	if (result !== expected)
		throw new Error("test failed: got " + result + ', expected ' + expected);
	print((Date.now() - t0) + "ms");
}

function main() {
	print(run_recursive_generator(test_generator(fibo(25), fib(25))));
	print("Done.");
}

main();