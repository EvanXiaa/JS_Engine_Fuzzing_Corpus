
function opt(obj) {
    obj.method();
}

for(let i = 0; i < 1000; i++) {
    var obj = {
        method() {
            fromA = super['fromA'];
        }
    };
    opt(obj);
}

