// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: TypeError is subclass of Error from instanceof operator point of view
es5id: 11.8.6_A5_T1
description: Checking Error case
---*/

var __err = new Error;

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if (!(__err instanceof Error)) {
	throw new Test262Error('#1: TypeError is subclass of Error from instanceof operator point of view');
}
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#2
if (__err instanceof TypeError) {
	throw new Test262Error('#2: TypeError is subclass of Error from instanceof operator point of view');
}
//
//////////////////////////////////////////////////////////////////////////////

var err__ = Error('failed');

//////////////////////////////////////////////////////////////////////////////
//CHECK#3
if (!(err__ instanceof Error)) {
	throw new Test262Error('#3: TypeError is subclass of Error from instanceof operator point of view');
}
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#4
if (err__ instanceof TypeError) {
	throw new Test262Error('#4: TypeError is subclass of Error from instanceof operator point of view');
}
//
//////////////////////////////////////////////////////////////////////////////
