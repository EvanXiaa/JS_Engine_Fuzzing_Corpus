/*
Source: 
*/
"use strict";
const co = require('co');

function* test() {
	for (let i = 0; i < 1000000000; i++) {
		function* a() {}
		yield* a(); 
		if (i % 1000000 == 0) {
			console.log("Cycle", i, process.memoryUsage().heapUsed);
		}
	}
}

co(function*(){
	yield* test();
})