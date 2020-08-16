
function maxSubarraySum(arr, num) {
    let max = 0;
    let temp = 0;

    if (arr.length < num) return null;

    for(let i = 0; i < num; i++) {
        max += arr[i];
    }
    
    temp = max;
    for(let i = num; i < arr.length; i++) {
       temp = temp - arr[i - num] + arr[i]
       // Subtracts 1st element and adds new element
       max = Math.max(max, temp);
    }

    console.log(`Max sum is: ${max}`);
}

maxSubarraySum([1,2,5,2,8,1,5], 2);



// function maxSubarraySum(arr, num) {
//     let temp = 0;
//     let max = 0;
//     let maxArr = [];
//     if (arr.length < num) return null;

//     for(let i = 0; i < num; i++) {
//         temp += arr[i];
//         console.log(temp);
//     }
    

//     for(let i = 0; i < arr.length; i++) {
//         temp = arr[i] + arr[i+1];
//         if(temp > max) {
//             max = temp;
//             maxArr[0] = arr[i];
//             maxArr[1] = arr[i+1];
//             maxArr.splice(0, num, arr[i], arr)
//         }
//     }

//     console.log(`Max sum is: ${max} from numbers: ${maxArr}`);
//     console.log(maxArr);
// }

// maxSubarraySum([1,2,5,2,8,1,5], 2);