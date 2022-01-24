var v1 = typeof 13.37;
var v3 = Object(v1);
var v5 = [13.37,13.37];
var v6 = [v5];
v3.__proto__ = v6;
for (var v7 in v3) {}