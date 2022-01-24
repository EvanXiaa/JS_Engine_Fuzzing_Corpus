// Copyright 2021 Mathias Bynens. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Mathias Bynens
description: >
  Unicode property escapes for `Script=Sogdian`
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
    [0x010F30, 0x010F59]
  ]
});
testPropertyEscapes(
  /^\p{Script=Sogdian}+$/u,
  matchSymbols,
  "\\p{Script=Sogdian}"
);
testPropertyEscapes(
  /^\p{Script=Sogd}+$/u,
  matchSymbols,
  "\\p{Script=Sogd}"
);
testPropertyEscapes(
  /^\p{sc=Sogdian}+$/u,
  matchSymbols,
  "\\p{sc=Sogdian}"
);
testPropertyEscapes(
  /^\p{sc=Sogd}+$/u,
  matchSymbols,
  "\\p{sc=Sogd}"
);

const nonMatchSymbols = buildString({
  loneCodePoints: [],
  ranges: [
    [0x00DC00, 0x00DFFF],
    [0x000000, 0x00DBFF],
    [0x00E000, 0x010F2F],
    [0x010F5A, 0x10FFFF]
  ]
});
testPropertyEscapes(
  /^\P{Script=Sogdian}+$/u,
  nonMatchSymbols,
  "\\P{Script=Sogdian}"
);
testPropertyEscapes(
  /^\P{Script=Sogd}+$/u,
  nonMatchSymbols,
  "\\P{Script=Sogd}"
);
testPropertyEscapes(
  /^\P{sc=Sogdian}+$/u,
  nonMatchSymbols,
  "\\P{sc=Sogdian}"
);
testPropertyEscapes(
  /^\P{sc=Sogd}+$/u,
  nonMatchSymbols,
  "\\P{sc=Sogd}"
);