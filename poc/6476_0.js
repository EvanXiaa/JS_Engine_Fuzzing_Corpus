
'use strict';
function func(b, c) {
    b[0] = c;
}
function main() {
    let b = new Uint32Array(100);

    for (let i = 0; i < 1000; i++) {
        i += 1;
        i += 0;
        func(b, {});
    }
}
main();

