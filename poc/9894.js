/*
Source: 
*/
const ary = [1.1]
Object.defineProperty(ary, 0, {get:run_it} );

run_it(undefined);

function run_it(el) {
	try {
//  v8::internal::Runtime_ArrayIncludes_Slow
		const ret_bool = ary.includes(); 
   
		  const obj_1 = Object.freeze(ary);
		//const obj_1 = Object.seal(ary);

	} catch(err) { // trigger the catch after a RangeError
		ary.length = new Proxy([], function() {});
	}

//%SystemBreak();
	ary[0] = 1.1;
	return 2.2;
}
