/*
Source: 
*/
load("test/mjsunit/wasm/wasm-constants.js");
load("test/mjsunit/wasm/wasm-module-builder.js");

var builder = new WasmModuleBuilder();

builder.addFunction("recursion", kSig_v_v)
	.addBody([kExprCallFunction, kArity0, 0])
	.exportFunc();

var module = builder.instantiate();

// May or may not throw exception, but should not crash V8!
try {
module.exports.recursion();
} catch (e) {
}