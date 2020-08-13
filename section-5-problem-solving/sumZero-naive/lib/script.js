function sumZero(arr){
    for(let i = 0; i < arr.length; i++){
        for(let j = arr.length-1; j > 0; j--) {
            if(arr[i] + arr[j] === 0) {
                return [arr[i], arr[j]];
            }
        }
    }
}

console.log(sumZero([-4,-3,-2,-1,0,1,2,5]));