
function func_0() {                                                                
  var wasmCode = new Uint8Array([0,97,115,109,1,0,0,0,1,6,1,96,1,127,1,127,3,2,1,0,5,4,1,1,1,1,7,8,1,4,108,111,97,100,0,0,10,9,1,7,0,32,0,40,0,0,11,0,7,1,5,4,108,111,97,100]);
  var wasmModule = new WebAssembly.Module(wasmCode);                               
  for (var var_0 of [0, 12, 192]) {                                                
    var wasmInstance = new WebAssembly.Instance(wasmModule, { mod: { offset: var_0 } }); 
    for (var var_2 = var_0 - 20; var_2 < var_0 + 20; var_2 += 4) {                 
      if (var_2 >= 0)                                                              
        wasmInstance.exports.load(var_2)                                           
    }                                                                              
  }                                                                                
}                                                                                  
for(i = 0; i < 0x10000; i ++)                                                      
  func_0();

