
function test() {
   var get = [];
   var p = new Proxy(
       { exec: function () { return null; } },
       { get: function (o,k) { get.push(k); return o[k]; }}
   );
   RegExp.prototype[Symbol.search].call(p);
   return get + "" ===
       "lastIndex,exec,lastIndex";
}
if (!test())
   throw new Error("Test failed");

