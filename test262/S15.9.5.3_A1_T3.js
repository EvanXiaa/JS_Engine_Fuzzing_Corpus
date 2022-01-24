// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: The Date.prototype property "toDateString" has { DontEnum } attributes
esid: sec-date.prototype.todatestring
description: Checking DontEnum attribute
---*/
assert(
  !Date.prototype.propertyIsEnumerable('toDateString'),
  'The value of !Date.prototype.propertyIsEnumerable(\'toDateString\') is expected to be true'
);

for (var x in Date.prototype) {
  assert.notSameValue(x, "toDateString", 'The value of x is not "toDateString"');
}

// TODO: Convert to verifyProperty() format.
