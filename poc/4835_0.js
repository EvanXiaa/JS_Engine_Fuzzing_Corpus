
const prop = Symbol('prop');

class A {
  // A property identified by a Symbol.
  get [prop]() {
    return this;
  }
}

class B extends A {
  get [prop]() {
    // This should be `this`, but is undefined.
    return super[prop];
  }
}

