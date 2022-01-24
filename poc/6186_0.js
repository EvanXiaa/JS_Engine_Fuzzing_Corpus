
var key1 = {};
var key2 = {};
var map = new WeakMap(); 

map.set(key1, 1);
map.delete(Object.assign(key2, key1));

