
console.log('A\0AA' === 'A\0ZZ'); //false
console.log(Symbol.for('A\0AA') === Symbol.for('A\0ZZ')) //true -- should be false

Symbol.for('B\0AA'); 
console.log(Symbol.for('B\0ZZ')); //Symbol(B AA) -- should be Symbol(B ZZ) 

