//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------
var A = new Int32Array(100);
var str = "123.12";

function FAIL(x, y) {
  print("FAILED\n");
  print("Expected " + y + ", got " + x + "\n");
  throw "FAILED";
}

function foo() {
  var y = 0;

  for (var i = 0; i < 100; i += 4) {
    A[i] = i;
    A[i + 1] = i + 0x7ffffffa;
    A[i + 2] = i + 0.34;
    A[i + 3] = str;
  }

  for (var i = 0; i < 100; i++) {
    y += A[i];
    A[i] = 0;
  }

  return y;
}

var expected = -45097150083;
var r;

for (var i = 0; i < 1000; i++) {
  r = foo();

  if (r !== expected) {
    FAIL(r, expected);
  }
}

print("Passed\n");
