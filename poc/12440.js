/*
Source: 
*/
var bytes = readbuffer(arguments[0]);
var module = new WebAssembly.Module(bytes);

var importObject = Realm.global(Realm.current());
var inst = new WebAssembly.Instance(module, importObject);

var result = inst.exports.main();
if (result) console.log(result);