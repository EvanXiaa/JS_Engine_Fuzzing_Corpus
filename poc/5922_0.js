
function f(a, s, e) {
    for (var i = s, j = s; i < e; i++, j++) {
        j = j + 1 // chakra notices that we can still do the MemOp optimization, it does so by...
        a[i] = 1
    }
    // multiplying "j" by 2 here.
    print(j)
}

