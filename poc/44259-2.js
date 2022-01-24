function* opt(arg = () => {
    arg;
    this;
}, opt) {
    let tmp = arg.x;
    for (;;) {
        arg;
        yield;

        tmp = {
            inner() {
                tmp;
            }
        };
    }
}

for (let i = 0; i < 10000; i++) {
    opt();
}