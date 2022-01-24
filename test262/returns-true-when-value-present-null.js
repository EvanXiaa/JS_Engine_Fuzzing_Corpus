// Copyright (C) 2015 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
es6id: 23.2.3.7
description: >
    Set.prototype.has ( value )

    ...
    5. Repeat for each e that is an element of entries,
      a. If e is not empty and SameValueZero(e, value) is true, return true.
    ...

---*/

var s = new Set();

s.add(null)

assert.sameValue(s.has(null), true, "`s.has(null)` returns `true`");
