
var buffer = new Int8Array(8);
var func = function (elem) {
    return elem;
};

i = 9007199254740992;
Object.defineProperty(buffer, 'length', { value: i });
Array.prototype.find.call(buffer, func);

