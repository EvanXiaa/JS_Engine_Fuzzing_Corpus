// The global object can be the receiver passed to the get and set traps of a Proxy.
var global = this;
var proto = Object.getPrototypeOf(global);
var gets = 0,
    sets = 0;

try {
  Object.setPrototypeOf(global, new Proxy(proto, {
    has(t, id) {
      return id === "bareword" || Reflect.has(t, id);
    },

    get(t, id, r) {
      gets++;
      r;
      global;
      return Reflect.get(t, id, r);
    },

    set(t, id, v, r) {
      sets++;
      r;
      global;
      return Reflect.set(t, id, v, r);
    }

  }));
} catch (e) {
  global.bareword = undefined;
  gets = 1;
  sets = 1;
}

bareword;
undefined;
gets;
1;
bareword = 12;
sets;
1;
global.bareword;
12;
reportCompare(0, 0);
