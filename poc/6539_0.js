
'use strict';
function func(arr) {
    var a = new Promise(function() {});
    arr.__proto__.__proto__ = a;
}

for (var i = 0; i < 2; i++) {
    var arr = [
    ,
    {}
    ];
    Object.prototype.toString.call(Array());
    func(arr);
}

