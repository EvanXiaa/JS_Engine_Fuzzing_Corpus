/*
Source: 
*/
func2 = (x) => {
	return (x|0) && (1>>x == {})
}
func1 = () => {
	return func2(1)
};
f = () => {
	return func1(func2({}))
};
f();
f();
%OptimizeFunctionOnNextCall(f);
f();