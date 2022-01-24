/*
Source: 
*/
// Copyright 2016 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// Flags: --validate-asm --allow-natives-syntax

function WrapInAsmModule(func) {
	function MODULE_NAME(stdlib) {
		"use asm";
		var fround = stdlib.Math.fround;

		FUNC_BODY
		return {main: FUNC_NAME};
	}

	var source = MODULE_NAME.toString()
		.replace(/MODULE_NAME/g, func.name + "_module")
		.replace(/FUNC_BODY/g, func.toString())
		.replace(/FUNC_NAME/g, func.name);
	return eval("(" + source + ")");
}

function RunAsmJsTest(asmfunc, expect) {
	var asm_source = asmfunc.toString();
	var nonasm_source = asm_source.replace(new RegExp("use asm"), "");
	var stdlib = {Math: Math};

	if (true) {
		print("Testing " + asmfunc.name + " (js)...");
		var js_module = eval("(" + nonasm_source + ")")(stdlib);
		expect(js_module);
	}

	if (true) {
		print("Testing " + asmfunc.name + " (asm.js)...");
		var asm_module = asmfunc(stdlib);
		assertTrue(%IsAsmWasmCode(asmfunc));
		expect(asm_module);
	}
}

const fround = Math.fround;

function f32_add(a, b) {
	a = fround(a);
	b = fround(b);
	return fround(fround(a) + fround(b));
}
var inputs = [
	0, 1, 2, 3, 4,
	NaN,
	Infinity,
	-Infinity,
	30000, 400000, 5000000,
	100000000, 2000000000,
	-0,
	-1, -2, -3, -4,
	-10, -20, -30, -31, -32, -33, -100, -2000,
	-30000, -400000, -5000000,
	-100000000, -2000000000,
	-2147483646,
	-2147483647,
	-2147483648,
	-2147483649,
	0.1,
	1.1e-2,
	1.2e-4,
	1.3e-8,
	1.4e-11,
	1.5e-12,
	1.6e-13
];

(function () {
	for (var i = 0; i < 100; i++) {
		var func = f32_add;
		RunAsmJsTest(WrapInAsmModule(func), function (module) {
			for (a of inputs) {
				print(".");
				for (b of inputs) {
					assertEquals(func(a, b), module.main(a, b));
					assertEquals(func(a / 11,  b), module.main(a / 11, b));
					assertEquals(func(a, b / 420.9), module.main(a, b / 420.9));
					assertEquals(func(a / -31.1, b), module.main(a / -31.1, b));
				}
			}
		});
	}

})();