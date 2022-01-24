
function func_0(overrides) {
  return {
    get: overrides.get
  };
}

var var_0 = {
    length: 2 ** 53 + 2
};

var var_1 = new Proxy(var_0, func_0({
    get(t, pk, r) {
        return Reflect.get(t, pk, r);
    },
}));

Array.prototype.copyWithin.call(var_1);

