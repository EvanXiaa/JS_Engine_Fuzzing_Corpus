
(function () {                                                                     
    function func_0() {                                                            
    }                                                                              
    func_0.prototype = {                                                           
        foo() {                                                                    
            super.a = '';                                                          
        }                                                                          
    };                                                                             
    var var_0 = new func_0();                                                      
    Object.defineProperty(var_0, 'a', {});                                         
    var_0.foo();                                                                   
}());

