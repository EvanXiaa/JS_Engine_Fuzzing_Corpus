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
kExprI64Const, 0x42,
kExprI64Const, 0x42,
kExprI32ConvertI64,
kExprI64Const, 0x42,
kExprI64StoreMem16, 0x00, 0x42,
kExprI64Const, 0x54,
kExprI64Const, 0x42,
kExprI64Const, 0x42,
kExprI64Const, 0x42,
kExprI64Const, 0x42,
kExprI64LeU,
kExprI64Const, 0x42,
kExprI64Const, 0x42,
kExprI64Const, 0x42,
kExprI64LeU,
kExprI64Const, 0x2a,
kExprI64Clz,
kExprI64Clz,
kExprI64Clz,
kExprI64Const, 0x42,
kExprI64Const, 0x42,
kExprF32SConvertI64,
kExprI64Const, 0x42,
kExprI64Const, 0x42,
kExprI64Const, 0x42,
kExprI64LeU,
kExprI64Const, 0x42,
kExprI64Const, 0x42,
kExprI64Const, 0xb4, 0x42,
kExprI64Const, 0x00,
kExprUnreachable,
kExprI32Eqz,
kExprI32Eqz,
kExprI32Eqz,
kExprI32Eqz,
kExprI32Eqz,
kExprI32Eqz,
kExprEnd,   // @62
						])
						.exportFunc();
	var module = builder.instantiate();
	module.exports.test(1, 2, 3);
})();
