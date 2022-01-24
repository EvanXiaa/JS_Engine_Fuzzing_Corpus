/*
Source: 
*/
Debug = debug.Debug;
var f = eval("(function() { return ''; })");
var script = Debug.findScript(f);
Debug.setScriptBreakPointById(script.id, 1, 0);
var change_log = new Array();
Debug.LiveEdit.TestApi.ApplySingleChunkPatch(script, -1, "", "", change_log);
assertThrows(f());