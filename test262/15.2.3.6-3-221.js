// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.6-3-221
description: >
    Object.defineProperty - 'Attributes' is a Boolean object that uses
    Object's [[Get]] method to access the 'get' property (8.10.5 step
    7.a)
---*/

var obj = {};

var boolObj = new Boolean(true);

boolObj.get = function() {
  return "booleanGetProperty";
};

Object.defineProperty(obj, "property", boolObj);

assert.sameValue(obj.property, "booleanGetProperty", 'obj.property');
