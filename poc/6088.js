/*
Source: 
*/
Debug = debug.Debug

var exception = null;

function listener(event, exec_state, event_data, data) {
	if (event != Debug.DebugEvent.Exception) return;
	try {
		var line = exec_state.frame(0).sourceLineText();
		var match = /Exception/.exec(line);
		assertNotNull(match);
	} catch (e) {
		exception = e;
	}
}

// Caught throw, events on any exception.
Debug.setListener(listener);
Debug.setBreakOnException();

var thenable = {
	get then() {
		throw new Error();  // Exception
	}
};

Promise.reject().finally(() => thenable);