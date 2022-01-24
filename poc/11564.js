/*
Source: 
*/
function f() {
	async function g(replace_me) {}
	while (true) {
		new Promise(g);
	}
}

const args = new Array(50000).fill('arg');
const f_async_many_args = f.toLocaleString().replace('replace_me', args);
eval(f_async_many_args);
f();