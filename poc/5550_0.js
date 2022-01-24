
(function ([a, b], c, ...{rest1, rest2}) {
    eval("");
    console.log(rest1);
    console.log(rest2);
    console.log(c);
    console.log(arguments[1]);
})([1, 2], 3, {rest1:4, rest2:5});

(function ([a, b], c, ...{rest1, rest2}) {
    (function () {
        console.log(rest1);
        console.log(rest2);
        console.log(a+b);
    })();
    eval("");
    console.log(arguments[0]);
})([1, 2], 3, {rest1:4, rest2:5});

