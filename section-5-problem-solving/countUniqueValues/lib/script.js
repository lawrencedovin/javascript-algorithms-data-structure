function countUniqueValues(arr){
    let i = 0;
    let j = 0;

    for(j = 0; j < arr.length; j++) {
        if(arr[i] != arr[j]){
            i++;
            arr[i]=arr[j];
        } 

        // if(arr[i] == arr[j]) {
        //     j++;
        // } else {
        //     i++;
        //     arr[i] = arr[j];
        //     j++;
        // }
        
        // Incorrect because j iterates no matter what until the arr.length
    }
    
    return i+1;
    // i+1 because i starts at 0;
}

console.log(countUniqueValues([1,1,1,2,3,3,4,4,5,6]));