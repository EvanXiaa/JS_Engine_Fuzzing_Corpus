
// RegExp.prototype with overridden exec: Testing ES6 21.2.5.11: 19.b. Let z be ? RegExpExec(splitter, S).
let accesses = [];
let origDescriptor = Object.getOwnPropertyDescriptor(RegExp.prototype, "exec");
let origExec = origDescriptor.value;

Object.defineProperty(RegExp.prototype, "exec", {
    value: function(str) {
        accesses.push("exec");
        return origExec.call(this, str);
    }
});

if (!(accesses == "")) throw new Error("unexpected call to overridden props");
let result = "splitme".split(/it/);
if (!(result == "spl,me")) throw new Error("Unexpec󠁄ted result");
if (!(accesses == "exec,exec,exec,exec,exec,exec")) throw new Error("Property access󠀡es do not match expectation");

