// Tests that the "return" method on iterators is called in yield*
// expressions.
function test() {
  var returnCalled = 0;
  var returnCalledExpected = 0;
  var nextCalled = 0;
  var nextCalledExpected = 0;
  var throwCalled = 0;
  var throwCalledExpected = 0;
  var iterable = {};
  iterable[Symbol.iterator] = makeIterator({
    next: function () {
      nextCalled++;
      return {
        done: false
      };
    },
    ret: function () {
      returnCalled++;
      return {
        done: true,
        value: "iter.return"
      };
    }
  });

  function* y() {
    yield* iterable;
  } // G.p.throw on an iterator without "throw" calls IteratorClose.


  var g1 = y();
  g1.next();

  (function () {
    g1.throw("foo");
  })();

  TypeError;
  returnCalled;
  ++returnCalledExpected;
  nextCalled;
  ++nextCalledExpected;
  g1.next();
  nextCalled;
  nextCalledExpected;
  // G.p.return calls "return", and if the result.done is true, return the
  // result.
  var g2 = y();
  g2.next();
  var v2 = g2.return("test return");
  v2.done;
  true;
  v2.value;
  "iter.return";
  returnCalled;
  ++returnCalledExpected;
  nextCalled;
  ++nextCalledExpected;
  g2.next();
  nextCalled;
  nextCalledExpected;
  // G.p.return calls "return", and if the result.done is false, continue
  // yielding.
  iterable[Symbol.iterator] = makeIterator({
    next: function () {
      nextCalled++;
      return {
        done: false
      };
    },
    ret: function () {
      returnCalled++;
      return {
        done: false,
        value: "iter.return"
      };
    }
  });
  var g3 = y();
  g3.next();
  var v3 = g3.return("test return");
  v3.done;
  false;
  v3.value;
  "iter.return";
  returnCalled;
  ++returnCalledExpected;
  nextCalled;
  ++nextCalledExpected;
  g3.next();
  nextCalled;
  ++nextCalledExpected;
  // G.p.return throwing does not re-call iter.return.
  iterable[Symbol.iterator] = makeIterator({
    ret: function () {
      returnCalled++;
      throw "in iter.return";
    }
  });
  var g4 = y();
  g4.next();

  (function () {
    g4.return("in test");
  })();

  "in iter.return";
  returnCalled;
  ++returnCalledExpected;
  // G.p.return expects iter.return to return an Object.
  iterable[Symbol.iterator] = makeIterator({
    ret: function () {
      returnCalled++;
      return 42;
    }
  });
  var g5 = y();
  g5.next();

  (function () {
    g5.return("foo");
  })();

  TypeError;
  returnCalled;
  ++returnCalledExpected;
  // IteratorClose expects iter.return to return an Object.
  var g6 = y();
  g6.next();
  var exc;

  try {
    g6.throw("foo");
  } catch (e) {
    exc = e;
  } finally {
    exc instanceof TypeError;
    true;
    exc.toString().indexOf("non-object") > 0;
    true;
  }

  returnCalled;
  ++returnCalledExpected;
  // G.p.return passes its argument to "return".
  iterable[Symbol.iterator] = makeIterator({
    ret: function (x) {
      x;
      "in test";
      returnCalled++;
      return {
        done: true
      };
    }
  });
  var g7 = y();
  g7.next();
  g7.return("in test");
  returnCalled;
  ++returnCalledExpected;
  // If a throw method is present, do not call "return".
  iterable[Symbol.iterator] = makeIterator({
    throw: function (e) {
      throwCalled++;
      throw e;
    },
    ret: function (x) {
      returnCalled++;
      return {
        done: true
      };
    }
  });
  var g8 = y();
  g8.next();

  (function () {
    g8.throw("foo");
  })();

  "foo";
  throwCalled;
  ++throwCalledExpected;
  returnCalled;
  returnCalledExpected;
}

test();

if (typeof reportCompare === "function") {
  reportCompare(0, 0);
}
