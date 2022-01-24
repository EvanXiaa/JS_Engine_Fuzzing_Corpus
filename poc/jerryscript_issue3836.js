function main() {
    var v3 = new Float64Array(6);
    var v4 = v3.buffer;
    v4.constructor = Uint8Array;
    var v5 = new Float64Array(v3);
}
main();
