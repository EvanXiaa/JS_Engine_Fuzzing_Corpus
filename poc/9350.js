/*
Source: 
*/
const arrs = [];
let n = 0;
while(1) {
	arrs.push(new Array(1e6).fill(0));
	if(++n % 10 === 0) console.log(arrs.length);
}