/*
Source: 
*/
load("test/mjsunit/wasm/wasm-constants.js");
load("test/mjsunit/wasm/wasm-module-builder.js");

var proxy = new Proxy(new Error(), {
	has(target, property, receiver) {
		print("intercepted has:", property)
		return Reflect.has(target, property, receiver);
	}
});
var error = new Error("my error");
error.__proto__ = proxy;
function fun() { print("throwing"); throw error }
var builder = new WasmModuleBuilder();
builder.addException(kSig_v_v);
builder.addImport('mod', 'fun', kSig_v_v);
builder.addFunction("funnel", kSig_v_v)
			 .addBody([kExprCallFunction, 0])
			 .exportFunc();
var instance = builder.instantiate({ mod: {fun: fun}});
instance.exports.funnel();