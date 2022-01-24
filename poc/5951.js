/*
Source: 
*/

// Copyright 2017 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

load("test/mjsunit/wasm/wasm-constants.js");
load("test/mjsunit/wasm/wasm-module-builder.js");

(function() {
	var builder = new WasmModuleBuilder();
	builder.addMemory(16, 32, false);
	builder.addFunction("test", kSig_i_iii)
		.addBodyWithEnd([
// body: 
	kExprI64Const, 0x42,
		kExprI64Const, 0x01,
					kExprI64Const, 0x42,
					kExprI64Const, 0x7f,
				kExprI64DivS,
					kExprI64Const, 0x42,
					kExprI64Const, 0x6f,
				kExprI64Shl,
			kExprI64ShrU,
			kExprI64Const, 0x7f,
		kExprI64And,
	kExprI64ShrU,
kExprI64DivS,
kExprUnreachable,
kExprEnd,   // @22
						])
						.exportFunc();
	var module = builder.instantiate();
	module.exports.test(1, 2, 3);
})();
