/*
Source: 
*/
load('test/mjsunit/wasm/wasm-constants.js');
load('test/mjsunit/wasm/wasm-module-builder.js');

(function testCallImportedWithParameters() {
	let func1 = (i) => i+1;
	let func2 = (f) => f+2;

	var builder = new WasmModuleBuilder();
	builder.addImport('mod', 'func1', makeSig([kWasmF32], [kWasmI32]));
	builder.addImport('mod', 'func2', makeSig([kWasmI64], [kWasmF64]));
	builder.addFunction('main', makeSig([kWasmF32, kWasmI32], [kWasmF32]))
			.addBody([
				// call #0 with arg 0
				kExprGetLocal, 0, kExprCallFunction, 0,
				// convert returned value to f32
				kExprF32UConvertI32,
				// call #1 with arg 1 converted to i64
				kExprGetLocal, 1, kExprI64UConvertI32, kExprCallFunction, 1,
				// convert returned value to f32
				kExprF32ConvertF64,
				// add the two values
				kExprF32Add
			])
			.exportFunc();
	builder.instantiate({mod: {func1: func1, func2: func2}});
})();