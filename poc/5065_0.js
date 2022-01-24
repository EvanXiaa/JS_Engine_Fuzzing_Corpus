
var protoOfError = Reflect.getPrototypeOf(TypeError);
if (!(protoOfError === Error)){
  throw new Error('expected: function Error() {[native code]}, got: ' + protoOfError);
}

