/*
Source: 
*/
"use strict";

var result = '';
for (let p in { get a() {}, b : p}) { result += p; }