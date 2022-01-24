/*
Source: 
*/
function v0(v1){
	return (v1) + (10);
}
(v0.prototype.complete) = (function (){
		});
v0.SRC_ALPHA_SATURATE;
const v1 = 0x00000035;
for(let v0;;){
	({__lookupGetter__ : (function (){
			      (v0) = true;
			      }), test : (function (){
				      try{
				      v1();
				      }catch(v2){
				      (v3) = v2.stack;
				      }
				      })}).test();
}
(v1) = (((v1) + (0x165667b1)) + ((v1) << (5))) & (0xffffffff);
for(var v2 = 2304;(v2) < (2560);v2++){
	(v3) = (v2) % (64);
	if(v0){
		break ;
	}
}
for(var v4 = 1;(v4) <= (v2);v4++){
	(v3) += v0(v4, v1).itemCheck();
	(v3) += v0(- v4, v1).itemCheck();
}