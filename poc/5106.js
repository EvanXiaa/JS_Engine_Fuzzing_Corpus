/*
Source: 
*/
function* g() {
	try { throw {} } catch ({C = class extends (yield) {}}) {} 
}
g().next();