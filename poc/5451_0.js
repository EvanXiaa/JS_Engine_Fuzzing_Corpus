
  function* test() {
    try {
      yield 42;
    } catch (e) {
    }
  }
  var t = test();
  t.next();
  var v = t.return();

