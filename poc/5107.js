/*
Source: 
*/
function* g() { var f = (x = do { yield }) => {}; f(); }
g().next();