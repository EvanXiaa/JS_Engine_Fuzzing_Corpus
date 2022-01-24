// Copyright 2021 Mathias Bynens. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Mathias Bynens
description: >
  Unicode property escapes for `Script_Extensions=Oriya`
info: |
  Generated by https://github.com/mathiasbynens/unicode-property-escapes-tests
  Unicode v14.0.0
esid: sec-static-semantics-unicodematchproperty-p
features: [regexp-unicode-property-escapes]
includes: [regExpUtils.js]
---*/

const matchSymbols = buildString({
  loneCodePoints: [
    0x001CDA,
    0x001CF2
  ],
  ranges: [
    [0x000951, 0x000952],
    [0x000964, 0x000965],
    [0x000B01, 0x000B03],
    [0x000B05, 0x000B0C],
    [0x000B0F, 0x000B10],
    [0x000B13, 0x000B28],
    [0x000B2A, 0x000B30],
    [0x000B32, 0x000B33],
    [0x000B35, 0x000B39],
    [0x000B3C, 0x000B44],
    [0x000B47, 0x000B48],
    [0x000B4B, 0x000B4D],
    [0x000B55, 0x000B57],
    [0x000B5C, 0x000B5D],
    [0x000B5F, 0x000B63],
    [0x000B66, 0x000B77]
  ]
});
testPropertyEscapes(
  /^\p{Script_Extensions=Oriya}+$/u,
  matchSymbols,
  "\\p{Script_Extensions=Oriya}"
);
testPropertyEscapes(
  /^\p{Script_Extensions=Orya}+$/u,
  matchSymbols,
  "\\p{Script_Extensions=Orya}"
);
testPropertyEscapes(
  /^\p{scx=Oriya}+$/u,
  matchSymbols,
  "\\p{scx=Oriya}"
);
testPropertyEscapes(
  /^\p{scx=Orya}+$/u,
  matchSymbols,
  "\\p{scx=Orya}"
);

const nonMatchSymbols = buildString({
  loneCodePoints: [
    0x000B04,
    0x000B29,
    0x000B31,
    0x000B34,
    0x000B5E
  ],
  ranges: [
    [0x00DC00, 0x00DFFF],
    [0x000000, 0x000950],
    [0x000953, 0x000963],
    [0x000966, 0x000B00],
    [0x000B0D, 0x000B0E],
    [0x000B11, 0x000B12],
    [0x000B3A, 0x000B3B],
    [0x000B45, 0x000B46],
    [0x000B49, 0x000B4A],
    [0x000B4E, 0x000B54],
    [0x000B58, 0x000B5B],
    [0x000B64, 0x000B65],
    [0x000B78, 0x001CD9],
    [0x001CDB, 0x001CF1],
    [0x001CF3, 0x00DBFF],
    [0x00E000, 0x10FFFF]
  ]
});
testPropertyEscapes(
  /^\P{Script_Extensions=Oriya}+$/u,
  nonMatchSymbols,
  "\\P{Script_Extensions=Oriya}"
);
testPropertyEscapes(
  /^\P{Script_Extensions=Orya}+$/u,
  nonMatchSymbols,
  "\\P{Script_Extensions=Orya}"
);
testPropertyEscapes(
  /^\P{scx=Oriya}+$/u,
  nonMatchSymbols,
  "\\P{scx=Oriya}"
);
testPropertyEscapes(
  /^\P{scx=Orya}+$/u,
  nonMatchSymbols,
  "\\P{scx=Orya}"
);
