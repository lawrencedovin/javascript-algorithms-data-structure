let arr = [1,2,3,4,5,6,8,12,15,16,29];
// Trying to look for 15
// Pick middle point which is 8
// is 15 greater than or less than 8

function binarySearch(arr, num) {
    let middleIndex = (arr.length-1)/2;
    let found = false;
    let i = middleIndex;

    while(i < arr.length) {
        if(arr[i] == num) {
            found = true;
            console.log(`Found number at index ${i}, with a value of: ${arr[i]}`);
        } 
        i++;
    }

    i = middleIndex - 1;
    while(i >= 0){
        if(arr[i] == num) {
            found = true;
            console.log(`Found number at index ${i}, with a value of: ${arr[i]}`);
        } 
        i--;
    }
    
    if(found == false) {
        console.log("Value not in array");
    }
}

binarySearch(arr, 29);
