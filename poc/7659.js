/*
Source: 
*/
'use strict';

let list = [];
let lists = [];

function addHandler() {
	for (const list of lists) {
		for (const rejection of list) {
			rejection.catch(() => {});
		}
	}
	lists = [];
}

function add(references) {
	setImmediate(() => {
		for (var i = 0; i < 100; i++) {
			list.push(Promise.reject(new Error('foo')));
		}
		if (list.length > references) {
			lists.push(list);
			list = [];
			setTimeout(addHandler, 1);
		}
		add(references);
	});
};

add(1000);