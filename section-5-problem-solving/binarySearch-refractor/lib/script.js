let arr = [1,2,3,4,5];
// Trying to look for 15
// Pick middle point which is 8
// is 15 greater than or less than 8

function binarySearch(arr, num) {
    let min = 0;
    let max = arr.length - 1;
    // min & max represent index: 0 to num

    while(min <= max){
        let middle = Math.floor((min + max) / 2);

        if(arr[middle] < num) {
            min = middle + 1;
        }
        else if (arr[middle] > num) {
            max = middle - 1;
        }
        else {
            return middle;
        }
    }
    return -1;
}

console.log(binarySearch(arr, 4));
