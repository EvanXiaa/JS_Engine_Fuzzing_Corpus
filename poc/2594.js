/*
Source: 
*/
(function(){var x='outer'; try {throw 'inner'} catch(x) { return eval("function f(){ return x } f()") }})()