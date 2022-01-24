
var index = "0.1";
var ary = [0,1];

for (var i = 0; i < 10000; ++i)
{
    // +index calls Op_ConvNumber which will return a double in this case. 
    // LdElemI will does a type check on the index and bails out if it's not an int, but rejits the exact same code.
    ary[+index];
}

