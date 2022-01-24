/*
Source: 
*/
async function g() {
	return Promise.resolve("resolved");
}

async function f() {
	try {
		await g();
		return await g();
	} catch (e) {}
}

async function main() {
	console.log(await f());
}

main();
