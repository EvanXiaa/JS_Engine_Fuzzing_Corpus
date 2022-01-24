/*
Source: 
*/
var g71 = newGlobal({
	newCompartment: true
});
var dbg = Debugger(g71);
var num = 20;
function loop(i39) {}
g71.eval(loop.toString());
dbg.onEnterFrame = function(frame) {};
dbg.collectCoverageInfo = true;
g71.eval("loop(" + num + ");");
dbg.collectCoverageInfo = false;