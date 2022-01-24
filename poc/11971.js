/*
Source: 
*/
function* v0(){}
v5 = v0([]);
v4 = v0([]);
while((v5) instanceof (v0)){
	(v4.__proto__) = new Proxy([], ({}));
	function v11(v1){
		v5.postMessage(JSON.stringify(({'type' : 'sendToTest', 'data' : v1})));
	}
}