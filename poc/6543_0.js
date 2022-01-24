
function opt(buffer) {
    let obj = [2.3023e-320]; 
    var result = buffer.slice(obj.x, obj.x);
}
function main() {
    for (let i = 0; i < 1000; i++) {
        var buffer = new ArrayBuffer(8);
        opt(buffer);
    }   

    buffer = new ArrayBuffer(2147483647);
    opt(buffer);
}
main();     

