/*
Source: 
*/
(function () { 
	"use strict"; 
	class A { s() { super.bla = 10; } };
	(new A).s.call(undefined);
})()