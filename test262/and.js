// Copyright 2017 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// Generated by tools/bigint-tester.py.

var data = [{
  a: 0x9252b94f220ded0c18706998886397699c5a25527575dn,
  b: -0x286817ba2e8fd8n,
  r: 0x9252b94f220ded0c1870699888639769185a045015008n
}, {
  a: 0x15a28152354fe421bbe4649d4d22d536ac34f9ba962n,
  b: 0x8n,
  r: 0n
}, {
  a: 0xd09791bf7ae6703fae8d654104f54fcd957bbf028540b8e7c0f859fdcc1b7abd617en,
  b: 0x24b473d03n,
  r: 0x24a052102n
}, {
  a: 0x2f73fbd05e9f7f70beba3dc7cd883732149a3d02a422f90f336n,
  b: 0x4490583f8n,
  r: 0x9008330n
}, {
  a: 0xd6ea27844b3d356774e73de10d393ab9cadb81848e3b4a34d1f7440d3n,
  b: 0x1639eeee731f3ba09234b5e15ec92f8bfb5cea28a0e89c59ed1c45b5f04n,
  r: 0x10ea26000b39200234a5214009290ab948ca008088184824104504000n
}, {
  a: -0x131f5e2c196269fd140c8727a9a02170e0dddb6aec109a89bcn,
  b: 0x401ec4eae8b756f2b222f6f565fb6acecce3c524e9b453n,
  r: 0x12c488800242f230005655448b0a0204810124613440n
}, {
  a: -0x5bcba128bf7b949780a4bd02782a63ae79f646a33b8672f3f692ab98n,
  b: -0xa81dd8ff624072fce3a00eb0bd5700e5666c3beb7d59701c42489n,
  r: -0x5bcba1fdbfffb497afeebf02fb2bf7fe7ff666e3bfb7f7f7f7d6afa0n
}, {
  a: 0xc997546528786548270061bcn,
  b: 0x75023f046c04f9095f64d3b8c75ab21950an,
  r: 0x499014640838044023000108n
}, {
  a: 0x5ad0abd6e43ef787248af2607fb29b9c3f7a1e7b106269ff3bn,
  b: -0xd483c8630392db4b620e0f6n,
  r: 0x5ad0abd6e43ef787248af2607fb29380394a06520040491f0an
}, {
  a: -0x9ed448bdb4794e4c0485db9ebe6cad0b0n,
  b: -0x549a70753c9afn,
  r: -0x9ed448bdb4794e4c0485df9efe7dbd9b0n
}, {
  a: -0x3a3fe42647633612082372714484767efc9673ce964b76f9f53a63d5n,
  b: 0x99615e5edd0506cbb5512fb56ee2dd1238bn,
  r: 0x986116189800068881100b0000608c1000bn
}, {
  a: -0xac1b8238c08f5n,
  b: -0xb9439dfbbc70e12b3a1fc7ccbfebeacd9bb321d83d3an,
  r: -0xb9439dfbbc70e12b3a1fc7ccbfebeacfdbbb23dc3dfen
}, {
  a: 0x120580503n,
  b: 0x90e13d34618496af407fabefabdd23892f488n,
  r: 0x20100400n
}, {
  a: 0xaa51cn,
  b: 0x2122a9c43b2531d5n,
  r: 0x2114n
}, {
  a: 0xaf43eb353c1547dc6ad79768e9a6n,
  b: 0x55c80f89d8fe82dbf69eca557dd0479b6a449db77e38b2241ec81aa7d4042766dd3e63n,
  r: 0x28022014081007d4000706482822n
}, {
  a: 0xbd38b2d88212ceea6fbe3890769e46236n,
  b: 0xeb22e568873e9bfdb5d2ddbc03n,
  r: 0x88202468863a83890540c42002n
}, {
  a: 0x24cd8c9634eddf319c57b54dffb49ce4974528f03b2c732d052ad496n,
  b: -0x4079cfn,
  r: 0x24cd8c9634eddf319c57b54dffb49ce4974528f03b2c732d052a8410n
}, {
  a: -0x61f263476a1212fce55cf7d437f4364b73a1815a641n,
  b: -0x19226cb79772cca166043a29d1f0fe1df5n,
  r: -0x61f263476b9236fffd7fffde37f477ebffbf8ffbff5n
}, {
  a: -0x44309b08a65bc7dc1e53d598d82ccdaa852941d7c851d907a6acn,
  b: 0xdd93dc17d38658ee30453d5f27en,
  r: 0x5d1304178102408230402d05054n
}, {
  a: 0x1e3eea4668e7a6c3bfa87d3f7a419bd18an,
  b: -0x592d83940f884f9n,
  r: 0x1e3eea4668e7a6c3bfa86d274201035102n
}];

var error_count = 0;
for (var i = 0; i < data.length; i++) {
  var d = data[i];
  var r = d.a & d.b;
  if (d.r !== r) {
    print("Input A:  " + d.a.toString(16));
    print("Input B:  " + d.b.toString(16));
    print("Result:   " + r.toString(16));
    print("Expected: " + d.r);
    print("Op: &");
    error_count++;
  }
}
if (error_count !== 0) {
  print("Finished with " + error_count + " errors.")
  quit(1);
}
