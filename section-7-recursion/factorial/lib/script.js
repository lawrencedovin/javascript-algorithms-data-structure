function factorial(num) {
    // if(num === 1) {
    //     return num * 1;
    // }

    // return num * factorial(num-1);

    return num === 1 ? num * 1 : num * factorial(num-1);
}

console.log(factorial(3));