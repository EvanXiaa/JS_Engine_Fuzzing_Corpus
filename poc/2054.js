/*
Source: 
*/

// Uncommenting the function wrap makes for no crash.


// (function() {

var a = 1,
		b = 2;

for(var i = 0; i < 1e5; i++) {  // No crash if `1e4` is chosen.
	if(a === b) {
		throw new Error;
	}
}

// })();