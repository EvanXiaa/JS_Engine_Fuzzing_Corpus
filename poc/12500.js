/*
Source: 
*/
class A {
	a() { this.#b() }
	#b() {}
}
for (let i = 0; i < 1e5; i++) {
	new A().a();
}