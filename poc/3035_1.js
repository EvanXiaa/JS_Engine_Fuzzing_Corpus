
function setupShim() {

		console.log("Shimming Array.splice()");
		
		var oldSplice = [].__proto__.splice;
		
		var newSplice = function(start, deleteCount ) {		
			if( start < 0
				|| start > this.length - 1 
				|| deleteCount === undefined 
				|| deleteCount < 0 
				|| start + deleteCount > this.length 
				|| arguments.length > 2 ) {
					// Nasty corner cases. Using old splice.
					return oldSplice.apply(this, arguments); 
			}	
			var retval = new Array(deleteCount);
			for(var i = 0 ; i < deleteCount && i < this.length; i++) {
				retval = this[start+i];
				this[start+i] = null;
			}
			oldSplice.apply(this, arguments); 
			return retval;
		};
		
		[].__proto__.splice = newSplice;

}

