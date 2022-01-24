/*
Source: 
*/
"use strict";

function trySet(o) {
	o["bla"] = 0;
}

var proxy = new Proxy({}, {});
var proxy2 = new Proxy({}, { set() {return ""} });

trySet(proxy);
trySet(proxy);
trySet(proxy2);