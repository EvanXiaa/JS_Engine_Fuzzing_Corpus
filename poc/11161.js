/*
Source: 
*/
var caught = 0;

function runManyTimes(f) {
	for (let i = 0; i < 1000; ++i) {
		try {
			f();
		} catch (e) {}
	}
}

let A = {
	get foo() {
		return this;
	}
};

let B = {
	__proto__: A,

	aa() {
		"use strict";
		let arrow = () => super.foo;
		arrow();
	}
};

var superAccessingFunc = B.aa;

runManyTimes(function () {
	try {
		superAccessingFunc();
	} catch (e) {
		caught++;
	}
});

print("Caught: " + caught);