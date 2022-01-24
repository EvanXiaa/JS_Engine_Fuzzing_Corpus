/*
Source: 
*/
exception = false;

function listener(event, exec_state, event_data, data) {
	try {
		if (event == Debug.DebugEvent.Break)
		{ 
			exec_state.frame(0).allScopes(); // Crash here.
		}
	} catch (e) {
		exception = e
	};
};

// Add the debug event listener.
Debug.setListener(listener);

function f() {
	var a = 1;
	var b = 2;
	with ({a:2}) {
		debugger;  // Breakpoint.
	}
};

f();