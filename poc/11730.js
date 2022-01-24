/*
Source: 
*/
var proxy = new Proxy({}, {ownKeys() { throw 0; }});
import(0, {assert: proxy});