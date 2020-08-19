function sumRange(num) {

    // if(num === 1) {
    //     return 1;
    // }

    // return num + sumRange(num-1);

    return num === 1 ? 1 : num + sumRange(num-1);
}

// sumRange(3)
// return 3 + sumRange(2);
// return 2 + sumRange(1);
// return 1;

// return 3 + sumRange(2);
// return 2 + 1; -> 3

// return 3 + 3 -> 6