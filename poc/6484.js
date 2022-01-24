/*
Source: 
*/
let a = 1;
function bar() {
	(() => {a; debugger })();
};
bar();