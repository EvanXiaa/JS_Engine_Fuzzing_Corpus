// Copyright 2021 Mathias Bynens. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Mathias Bynens
description: >
  Unicode property escapes for `Script_Extensions=Lepcha`
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
    [0x001C00, 0x001C37],
    [0x001C3B, 0x001C49],
    [0x001C4D, 0x001C4F]
  ]
});
testPropertyEscapes(
  /^\p{Script_Extensions=Lepcha}+$/u,
  matchSymbols,
  "\\p{Script_Extensions=Lepcha}"
);
testPropertyEscapes(
  /^\p{Script_Extensions=Lepc}+$/u,
  matchSymbols,
  "\\p{Script_Extensions=Lepc}"
);
testPropertyEscapes(
  /^\p{scx=Lepcha}+$/u,
  matchSymbols,
  "\\p{scx=Lepcha}"
);
testPropertyEscapes(
  /^\p{scx=Lepc}+$/u,
  matchSymbols,
  "\\p{scx=Lepc}"
);

const nonMatchSymbols = buildString({
  loneCodePoints: [],
  ranges: [
    [0x00DC00, 0x00DFFF],
    [0x000000, 0x001BFF],
    [0x001C38, 0x001C3A],
    [0x001C4A, 0x001C4C],
    [0x001C50, 0x00DBFF],
    [0x00E000, 0x10FFFF]
  ]
});
testPropertyEscapes(
  /^\P{Script_Extensions=Lepcha}+$/u,
  nonMatchSymbols,
  "\\P{Script_Extensions=Lepcha}"
);
testPropertyEscapes(
  /^\P{Script_Extensions=Lepc}+$/u,
  nonMatchSymbols,
  "\\P{Script_Extensions=Lepc}"
);
testPropertyEscapes(
  /^\P{scx=Lepcha}+$/u,
  nonMatchSymbols,
  "\\P{scx=Lepcha}"
);
testPropertyEscapes(
  /^\P{scx=Lepc}+$/u,
  nonMatchSymbols,
  "\\P{scx=Lepc}"
);
