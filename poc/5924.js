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
	builder.addMemory(32, 32, false);
	builder.addFunction("test", kSig_i_iii)
		.addBodyWithEnd([
// body: 
kExprF32Const, 0x43, 0x43, 0x27, 0x43,
kExprF32Const, 0x67, 0x12, 0x43, 0x43,
kExprF32Const, 0x8b, 0x8b, 0x8b, 0x8b,
kExprF32Sqrt,
kExprF32Abs,
kExprF32Min,
kExprF32Neg,
kExprF32CopySign,
kExprI64UConvertF32,
kExprI32Const, 0x0f,
kExprReturn,
kExprEnd,   // @25
						])
						.exportFunc();
	var module = builder.instantiate();
	module.exports.test(1, 2, 3);
})();