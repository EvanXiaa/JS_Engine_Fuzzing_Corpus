
function f1(a,b,c) {

    function f2() {
        let p1 = new Proxy({},Object);
        Object.assign(p1,"rightContext",{set:v=>v});   
    }
    
    f2(0,0,f2);
    new Promise(f1);
}
    

f1(0,0,f1);
for (let t = 0; t < 1000; t++){
    f1(0,0,f1);
} 

