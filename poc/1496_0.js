
var Test = {};

class A {
    constructor(foo) { this.foo = foo; }
    toB() { return new Test.B(this); }
}

class B {
    constructor(bar) { this.bar = bar; }
}

Test.B = B;

for (let i=0; i<500; i++)
{
    const a = new A(i);
    const b = a.toB();

    try
    {
        console.log(b.bar.foo);
    }
    catch (e)
    {
        console.log(e); // e.description -> "Unable to get property 'foo' of undefined or null reference"
        console.log(b); // b -> class B { ... }
        break;
    }
}

