/*
Source: 
*/
"use strict";

let s = "outer_s";  // Removing this line makes it pass

for (let p in {a : 1}) {}  // Removing this line makes it pass

function burn(x) {
	if ({} instanceof function() { p = true; }) {}  // Accessing "p" here crashes.
}
burn();