// Copyright 2021 Mathias Bynens. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Mathias Bynens
description: >
  Unicode property escapes for `Script=Sharada`
info: |
  Generated by https://github.com/mathiasbynens/unicode-property-escapes-tests
  Unicode v14.0.0
esid: sec-static-semantics-unicodematchproperty-p
features: [regexp-unicode-property-escapes]
includes: [regExpUtils.js]
---*/

const matchSymbols = buildString({
  loneCodePoints: [],
  ranges: [
    [0x011180, 0x0111DF]
  ]
});
testPropertyEscapes(
  /^\p{Script=Sharada}+$/u,
  matchSymbols,
  "\\p{Script=Sharada}"
);
testPropertyEscapes(
  /^\p{Script=Shrd}+$/u,
  matchSymbols,
  "\\p{Script=Shrd}"
);
testPropertyEscapes(
  /^\p{sc=Sharada}+$/u,
  matchSymbols,
  "\\p{sc=Sharada}"
);
testPropertyEscapes(
  /^\p{sc=Shrd}+$/u,
  matchSymbols,
  "\\p{sc=Shrd}"
);

const nonMatchSymbols = buildString({
  loneCodePoints: [],
  ranges: [
    [0x00DC00, 0x00DFFF],
    [0x000000, 0x00DBFF],
    [0x00E000, 0x01117F],
    [0x0111E0, 0x10FFFF]
  ]
});
testPropertyEscapes(
  /^\P{Script=Sharada}+$/u,
  nonMatchSymbols,
  "\\P{Script=Sharada}"
);
testPropertyEscapes(
  /^\P{Script=Shrd}+$/u,
  nonMatchSymbols,
  "\\P{Script=Shrd}"
);
testPropertyEscapes(
  /^\P{sc=Sharada}+$/u,
  nonMatchSymbols,
  "\\P{sc=Sharada}"
);
testPropertyEscapes(
  /^\P{sc=Shrd}+$/u,
  nonMatchSymbols,
  "\\P{sc=Shrd}"
);