/*
Source: 
*/
var x = { };
x.__defineGetter__("0", function(){ return 42; });
print (Object.getOwnPropertyDescriptor(x, "0").value);