
var x = 1;

(function() {

    x = (eval('var x = 20'), 2);

    console.log(x == 20); // this should be true

})();

console.log(x == 2); // this should be true

