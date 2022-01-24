/*
Source: 
*/
var Debug = debug.Debug;

function f() { g(); }

function g() { }

f();
f();
%OptimizeFunctionOnNextCall(f);
f();

Debug.setListener(function() {});
Debug.setBreakPoint(g, 0);

f();