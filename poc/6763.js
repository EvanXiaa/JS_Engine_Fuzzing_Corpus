/*
Source: 
*/
'use strict';

var a = [];

function f() {
	a.push(new Buffer(100));
	if (a.length === 10000) {
		return;
	} else {
		setTimeout(f, 1);
	}
};

f();