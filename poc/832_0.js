
function test1() {
    this.number = 1;
    this.str = "str";
    this.obj = { "a": 1, "b": 2 };
    this.arr = [1, 2, 3, 4];
    this.func = function () {
        var inti = 2;
    };
    debugger;
}

test1.prototype.snumber = 2;
test1.prototype.sstr = "str2";
test1.prototype.sfunc = function () {
    var inti3 = 4;
};


