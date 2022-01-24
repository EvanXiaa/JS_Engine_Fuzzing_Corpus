function f(arg) {
    const o = Reflect.construct(Object, arguments, Proxy);
    o.foo = arg;
}

for (let i = 0; i < 10000; i++) {
    f(i);
}