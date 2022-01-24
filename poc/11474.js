/*
Source: 
*/
var v0 = ({method : (function* ([{v1}] = []){})});
var v2 = ({deflater : [], inflater : []});
function v3(){
	v2.__proto__ = new Proxy(({}), v0);
}
v2 = new v3(v0[0], v2);
v1 = 0;
do {
	v1++;
	v3();
}while(v1<100000)