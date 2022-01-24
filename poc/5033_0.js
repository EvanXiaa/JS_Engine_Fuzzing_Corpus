
try{
    var a = {get "0"() {return 1;}, length: 1};
    [].fill.call(a, 2);
    throw new Error("should not reach this point")
}
catch(error){
    if (!(error instanceof TypeError)) throw new Error('Should throw TypeError')
}

