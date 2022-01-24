
var s = new SharedArrayBuffer(65536);
var u = new Uint32Array(s);
Atomics.store(u, 0, 1234);

