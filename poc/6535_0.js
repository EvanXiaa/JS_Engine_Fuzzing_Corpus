
array = [];
proxy = new Proxy(array, {
    get(t, pk, r) {
        if (pk === 'length') {
            return 2 ** 53;
        }
        return Reflect.get(t, pk, r);
    }
});
proxy.copyWithin(3);

