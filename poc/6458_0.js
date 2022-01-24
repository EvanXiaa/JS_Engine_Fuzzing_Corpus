
let b = [1.1, 2.2, 3.3];
b[4294967294] = 3;
Array.prototype.copyWithin.call(b, 0, 1);

