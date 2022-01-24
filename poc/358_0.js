
var a = new Proxy([],{valueOf:13.37});
var b = new Proxy(a,Reflect);
for (var c in b) {
}

