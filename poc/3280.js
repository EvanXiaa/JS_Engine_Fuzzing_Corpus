/*
Source: 
*/
var Debug = debug.Debug;

var exception, listener_called;

function listener(event, exec_state, event_data, data) {
	if (event == Debug.DebugEvent.Break) {
		listener_called = true;
		exec_state.frame().allScopes();
	}
}

// Add the debug event listener.
Debug.setListener(listener);

function *generator_local_2(a) {
	debugger;
}
generator_local_2(1).next();

assertTrue(listener_called, "listener not called");