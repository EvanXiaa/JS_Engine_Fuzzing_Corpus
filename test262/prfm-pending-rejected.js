// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
es6id: 25.4.5.3
description: PerformPromiseThen on a pending promise that is later rejected
info: |
    7. Return PerformPromiseThen(promise, onFulfilled, onRejected,
       resultCapability).

    25.4.5.3.1 PerformPromiseThen

    [...]
    7. If the value of promise's [[PromiseState]] internal slot is "pending",
       a. Append fulfillReaction as the last element of the List that is the
          value of promise's [[PromiseFulfillReactions]] internal slot.
       b. Append rejectReaction as the last element of the List that is the
          value of promise's [[PromiseRejectReactions]] internal slot.
    [...]
flags: [async]
---*/

var value = {};
var reject;
var p = new Promise(function(_, _reject) {
  reject = _reject;
});

p.then(function() {
  $DONE('The `onFulfilled` handler should not be invoked.');
}, function(x) {
  if (x !== value) {
    $DONE('The `onRejected` handler should be invoked with the promise result.');
    return;
  }
  $DONE();
});

reject(value);
