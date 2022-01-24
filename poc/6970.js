/*
Source: 
*/
async function foo() {
	let [await f] = [];
};

foo();

This will also cause the same kind of crash:

async function bar() {
	let {a: await b} = {};
}

bar();