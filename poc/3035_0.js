
// create 80kb Object
function createLargeObject(){
	var temparray = [];
	for(var i=0;i<10000;i++){
		temparray[i]=i;
	}
  return { obj:temparray };
}

function leak() { 
	globalarray = [];
	for(var i=0;i<20000;i++) {
		globalarray[i]=[];
		var innerarray = globalarray[i];
		var largeObj = createLargeObject();
		innerarray[0] = largeObj ;
		//innerarray[0] = null;   // Adding this will fix the problem
		innerarray.splice( 0, 1 );  
	}
}

