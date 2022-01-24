/*
Source: 
*/
var lfLogBuffer = `
	var g = newGlobal("/* 3/* */");
	g.parent = this;
	g.eval("Debugger(parent).onEnterFrame = function() {};");
	\`Assertion failed: expected exception \${ctor.name}, got \${exc}\`;
`;
untemplate = function(s) { return s.replace(/\\/g, '\\\\\\').replace(/`/g, '\\\`').replace(/\$/g, '\\\$'); }
loadFile(lfLogBuffer);
loadFile(lfLogBuffer);
function loadFile(lfVarx) {
		try {
			evaluate(lfVarx);
		} catch (lfVare) {}
		lfVarx = untemplate(lfVarx);
}