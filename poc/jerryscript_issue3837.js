function main() {
    var v1 = [1337, 1337, 1337, 1337, 1337];
    var v5 = { length: "size", d: 343661.18346282793, __proto__: 13.37 };
    var v7 = { ownKeys: gc, defineProperty: gc, getPrototypeOf: gc, has: gc, call: gc, apply: gc, getOwnPropertyDescriptor: gc, isExtensible: gc, deleteProperty: v5, construct: gc };
    var v9 = new Proxy(gc, v7);
    var v10 = v9;
    function v13(v14, v15, v16) {
    }
    var v17 = { set: Object, apply: Object, call: v13, get: resourceName, getOwnPropertyDescriptor: v13, deleteProperty: resourceName, isExtensible: v13, construct: resourceName, setPrototypeOf: v13, ownKeys: Object, preventExtensions: v13, defineProperty: Object };
    var v19 = new Proxy(v10, v17);
    delete v19[v1];
}
main();
