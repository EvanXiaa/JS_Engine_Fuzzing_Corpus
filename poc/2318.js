/*
Source: 
*/
function f() {
	var i = 0;          // Line 1.
	f(1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9,0);
};

Debug = debug.Debug;
var bp = Debug.setBreakPoint(f, 0);

function listener(event, exec_state, event_data, data) {
	result = exec_state.frame().evaluate("i").value();
};

Debug.setListener(listener);
f();