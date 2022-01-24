
function test1() {
    this.number = 1;
    this.number2 = this.number + 1;
    this.str = "str";
    this.obj = { "a": 1, "b": 2 };
    this.arr = [1, 2, 3, 4];
    this.func = function () {
        var inti = 2;
        this.insidestr = "str2";
        debugger;
    };
    debugger;
}

var t = new test1();
t.func();

test1();

