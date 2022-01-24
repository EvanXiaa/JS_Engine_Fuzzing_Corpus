
function foo(a, ...{...rest}) {
    console.log(JSON.stringify(rest));
}            
foo(1, 2, 3);

