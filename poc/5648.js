/*
Source: 
*/
var justSomeModule = new Array(Math.pow(2,15));
var emptyFunction = function() {};
var anotherOne = function() {};

function x() {
	justSomeModule;
	emptyFunction;
	anotherOne;
}

function* kindaInvalid() {
	for (let b of 0) {};
}

function bleh(gen) {
	gen.next(); // crashes here
	x;
}

bleh(kindaInvalid());