function same(arr1, arr2){
    if(arr1.length !== arr2.length){
        return false;
    }
    for(let i = 0; i < arr1.length; i++) {
        let correctIndex = arr2.indexOf(arr1[i] ** 2);
        // we pass in the square of each value from arr1 to check if it exists in arr2
        // what is the index of 1^2 in arr2
        if(correctIndex === -1) {
            return false;
            //if doesn't exist in arr2 then return false
        }
        arr2.splice(correctIndex, 1);
        // removes the array2 element that matched with array1
        // shrinks arr2
    }
    return true;
    // since we never returned false we returned true
}

function sameRefractored(arr1, arr2) {
    if(arr1.length !== arr2.length) {
        return false;
    }
    let frequencyCounter1 = {}
    let frequencyCounter2 = {}
    // 2 Objects getting individual values in the array

    for(let val of arr1){
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
                                 //If found and > 0 frequencyCounter1[val] + 1
                                 //If found and 0 frequencyCounter1[val] + 1
    }

    for(let val of arr2){
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
    }

    // Builds up the objects

    for(let key in frequencyCounter1){
        if(!(key ** 2 in frequencyCounter2)) {
            return false;
        }
        // If the key ** 2 is not found in the object frequencyCounter2 return false
        // {2: 2} is there a key of 4 {4: 2} in frequencyCount2? 
        if(frequencyCounter2[key ** 2] !== frequencyCounter1[key]){
            return false;
        }
        // (frequencyCounter2[4] !== frequencyCounter1[2]) if the occurences are not the same value.
        // does the value from the keys have the same frequency? {2 : 2} {4 : 2}
        console.log(frequencyCounter1);
        console.log(frequencyCounter2);
        return true;
    }
}