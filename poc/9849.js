/*
Source: 
*/
Object.defineProperty(Boolean.prototype, "prop", ({value : 1001, writable : true, enumerable : true, configurable : true}));
let v0 = 'sr-Cyrl-RS-t-ja-u-ca-buddhist-co-phonebk-hc-h23-kf-upper-kn-nu-roman-x-whatever';
var v1 = Object.getOwnPropertyDescriptor(RegExp.prototype, 'source');
var v2 = 271733878;
var v3 = Intl.DateTimeFormat('en-US', ({dateStyle : 'full', timeStyle : 'full'})).resolvedOptions();
let v4 = new Date(v2).toLocaleString(v0, Object.assign(({}), v3));
Object.defineProperty(v1, "p", ({get : (function (){
				return arguments.callee.caller.caller;
				})}));
{
	if(((v2) % (10)) == (2)){
		(function (){
		 return v1;
		 })();
	}else {
		print(v0);
	}
}