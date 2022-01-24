function foo() {
    const c = [];
    const p = {};
    const r = {e: NaN, g: undefined, c};
    const u = {__proto__: p, e: new  Set(), g: 0, c};
    return r;
  }
  foo();
  %OptimizeFunctionOnNextCall(foo);
  const o = foo();
  Object.defineProperty(o, 'c', {value: 42});