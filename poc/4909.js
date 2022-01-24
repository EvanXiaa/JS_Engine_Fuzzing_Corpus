/*
Source: 
*/
'use strict';

const s = new WeakSet();
let j = 0;
function f(){
	for (let i = 0 ; i<100000; i++) {
		s.add({});  
	}
	console.log(`${j++} :${0|(performance.memory.usedJSHeapSize/(1024*1024))}MB`);
	return Promise.resolve(null).then(f);
}
f()