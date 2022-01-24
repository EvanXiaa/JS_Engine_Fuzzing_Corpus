// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.3.4.5.2-4-1
description: >
    [[Construct]] - 'F''s [[BoundArgs]] is used as the former part of
    arguments of calling the [[Construct]] internal method of 'F''s
    [[TargetFunction]] when 'F' is called as constructor
---*/

var func = function(x, y, z) {
  var objResult = {};
  objResult.returnValue = x + y + z;
  objResult.returnVerifyResult = arguments[0] === "a" && arguments.length === 3;
  return objResult;
};

var NewFunc = Function.prototype.bind.call(func, {}, "a", "b", "c");

var newInstance = new NewFunc();

assert(newInstance.hasOwnProperty("returnValue"), 'newInstance.hasOwnProperty("returnValue") !== true');
assert.sameValue(newInstance.returnValue, "abc", 'newInstance.returnValue');
assert(newInstance.hasOwnProperty("returnVerifyResult"), 'newInstance.hasOwnProperty("returnVerifyResult") !== true');
assert.sameValue(newInstance.returnVerifyResult, true, 'newInstance.returnVerifyResult');
