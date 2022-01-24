// Copyright 2021 Mathias Bynens. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Mathias Bynens
description: >
  Unicode property escapes for `Dash`
info: |
  Generated by https://github.com/mathiasbynens/unicode-property-escapes-tests
  Unicode v14.0.0
esid: sec-static-semantics-unicodematchproperty-p
features: [regexp-unicode-property-escapes]
includes: [regExpUtils.js]
---*/

const matchSymbols = buildString({
  loneCodePoints: [
    0x00002D,
    0x00058A,
    0x0005BE,
    0x001400,
    0x001806,
    0x002053,
    0x00207B,
    0x00208B,
    0x002212,
    0x002E17,
    0x002E1A,
    0x002E40,
    0x002E5D,
    0x00301C,
    0x003030,
    0x0030A0,
    0x00FE58,
    0x00FE63,
    0x00FF0D,
    0x010EAD
  ],
  ranges: [
    [0x002010, 0x002015],
    [0x002E3A, 0x002E3B],
    [0x00FE31, 0x00FE32]
  ]
});
testPropertyEscapes(
  /^\p{Dash}+$/u,
  matchSymbols,
  "\\p{Dash}"
);

const nonMatchSymbols = buildString({
  loneCodePoints: [],
  ranges: [
    [0x00DC00, 0x00DFFF],
    [0x000000, 0x00002C],
    [0x00002E, 0x000589],
    [0x00058B, 0x0005BD],
    [0x0005BF, 0x0013FF],
    [0x001401, 0x001805],
    [0x001807, 0x00200F],
    [0x002016, 0x002052],
    [0x002054, 0x00207A],
    [0x00207C, 0x00208A],
    [0x00208C, 0x002211],
    [0x002213, 0x002E16],
    [0x002E18, 0x002E19],
    [0x002E1B, 0x002E39],
    [0x002E3C, 0x002E3F],
    [0x002E41, 0x002E5C],
    [0x002E5E, 0x00301B],
    [0x00301D, 0x00302F],
    [0x003031, 0x00309F],
    [0x0030A1, 0x00DBFF],
    [0x00E000, 0x00FE30],
    [0x00FE33, 0x00FE57],
    [0x00FE59, 0x00FE62],
    [0x00FE64, 0x00FF0C],
    [0x00FF0E, 0x010EAC],
    [0x010EAE, 0x10FFFF]
  ]
});
testPropertyEscapes(
  /^\P{Dash}+$/u,
  nonMatchSymbols,
  "\\P{Dash}"
);
