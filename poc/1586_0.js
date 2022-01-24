
class A {
    constructor() {
        this.x = 'A';
    }

    doitNormal() {
        return 'A';
    }

    doitApply() {
        return 'A';
    }
}

class B extends A {
    constructor() {
        super();
    }

    doit() {

    }

    doitNormal() {
        return super.doitNormal(this);
    }

    doitApply() {
        return super.doitApply.apply(this);
    }
}

var b = new B();
console.log("Normal: " + b.doitNormal());
console.log("Apply: " + b.doitApply());

