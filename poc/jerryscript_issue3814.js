function main() {
    var v4 = [1337, 1337, 1337];
    var v5 = [1018825975, 1018825975, Number];
    var v6 = { constructor: "symbol", toString: "symbol", __proto__: v4, b: v5, e: 1018825975 };
    var v8 = v6.toStringTag;
    function v9(v10, v11) {
        var v16 = [1337, 1337, 1337];
        var v17 = [1018825975, 1018825975, Number];
        var v18 = { constructor: "symbol", toString: "symbol", __proto__: v16, b: v17, e: 1018825975 };
        var v20 = v18.toStringTag;
        function v21(v22, v23) {
            var v25 = [1337, 1337];
            var v26 = v25[-1951730718];
            var v28 = { isExtensible: v26, __proto__: this };
            var v30 = new Proxy(Function, v28);
            return v30;
        }
        var v31 = { getPrototypeOf: v21, getOwnPropertyDescriptor: v21, isExtensible: v21, length: v20, set: v20, setPrototypeOf: v21, deleteProperty: v20, defineProperty: v21, get: v20, ownKeys: v21, construct: v20 };
        var v33 = new Proxy(Function, v31);
        var v34 = v33 instanceof v33;
        var v35 = v9();
    }
    var v36 = { getPrototypeOf: v9, getOwnPropertyDescriptor: v9, isExtensible: v9, length: v8, set: v8, setPrototypeOf: v9, deleteProperty: v8, defineProperty: v9, get: v8, ownKeys: v9, construct: v8 };
    var v38 = new Proxy(print, v36);
    var v39 = v38 instanceof v38;
    function v40(v41, v42, v43, v44) {
    }
}
main();
