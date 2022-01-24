
function func(b, c) {
    b[0] = c;
}
function main(o, ua) {
    var b = new Uint32Array(0);
    func(b, {
        valueOf: () => {
            ua.__proto__ = new Array(4294967295);
            return 0;
        }   
    }); 
    Array.prototype.includes.call(ua, 6);
}
var o = {};
var ua = new Uint32Array(16);
main(o, ua);

