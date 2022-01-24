/*
Source: 
*/
var RegExpSuite = new BenchmarkSuite('RegExp', [910985], [
	new Benchmark("RegExp", true, false, 50, RegExpRun, RegExpSetup, null, null, 16)
]);

var regExpBenchmark = null;

function RegExpSetup() {
	regExpBenchmark = new RegExpBenchmark();
	RegExpRun();
}

function RegExpRun() {
	regExpBenchmark.run();
}

function RegExpBenchmark() {
	this.run = () => {
		for (var i = 0; i < 5; i++) {
			var res = /=/.exec("VC=74.125.75.1");
		}
	};
}
