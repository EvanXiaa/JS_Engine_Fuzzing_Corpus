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
kExprI64Const, 0x80, 0x80, 0x80, 0x80, 0x80, 0x80, 0x80, 0x80, 0x80, 0x00,
kExprI64Const, 0x80, 0x80, 0x80, 0x80, 0x80, 0x80, 0x80, 0x80, 0x80, 0x00,
kExprI64And,
kExprI64Const, 0xc0, 0x80, 0x80, 0x80, 0x80, 0x80, 0x80, 0x80, 0x80, 0x00,
kExprI64ShrU,
kExprI64Const, 0xc0, 0x80, 0x80, 0x80, 0x80, 0x80, 0x80, 0x80, 0x80, 0x00,
kExprI64GeU,
kExprEnd,   // @48
						])
						.exportFunc();
	var module = builder.instantiate();
	module.exports.test(1, 2, 3);
})();
