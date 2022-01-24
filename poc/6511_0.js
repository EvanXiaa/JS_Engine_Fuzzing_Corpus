
  const obj = { };

  var a = { toString: ()=> {} };

  function opt(o, zz) {
    function foo () {
      String.prototype.replace.call(o, zz, obj);
    }
    foo ();
  }
  opt({}, "zzz");
  for (let xi = 0; xi < 500; xi++) {
    opt({}, "kkkk");
  }

opt(a, "llll")

