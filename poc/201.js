/*
Source: 
*/
function testsort(n) {
	n=1*n;
	var numbers=new Array(n);

	for (var i=0;i<n;i++) numbers[i]=i;
	numbers.sort();  // this crashes when n>5000. 
}

testsort("5001")