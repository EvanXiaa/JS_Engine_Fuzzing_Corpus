
async function bar() {
    throw new Error("Whoops");
}

async function foo() {
    try {
        await bar();
    } catch (e){
        console.log("Caught ");
    }
}

var oldThen = Promise.prototype.then;
Promise.prototype.then = function(thenx, catchx) {
    console.log(`then: ${thenx}, catch: ${catchx}`)
    oldThen.apply(this, [ thenx, catchx ]);
}

foo()

