/*
Source: 
*/
function ModIRightCanBeZero() {
	var x = 0;
	for (var i = -1; i <= 0; ++i) x = (2 % i) | 0;
	return x;
}