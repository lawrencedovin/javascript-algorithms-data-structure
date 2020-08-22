// function binarySearch(arr, value) {
//   // Create a left pointer at the start of the array.
//   let left = 0;
//   // Create a right pointer at the end of the array.
//   let right = arr.length - 1;

//   // Create a pointer in the middle.
//   let middle = Math.floor((left + right) / 2);

//   while (arr[middle] !== value && left <= right) {
//     // if value is smaller than middle, move the left pointer up
//     if (value < arr[middle]) {
//       right = middle - 1;
//     }
//     // if value is bigger than middle, move right pointer down
//     else {
//       left = middle + 1;
//     }
//     middle = Math.floor((left + right) / 2);
//   }

//   if(arr[middle] == value) {
//     return middle;
//   } 
//   return -1;
// }

function binarySearch(arr, value) {
  // Create a left pointer at the start of the array.
  let left = 0;
  // Create a right pointer at the end of the array.
  let right = arr.length - 1;
  // Create a pointer in the middle.
  let middle = Math.floor((left + right) / 2);

  // increments our left to out of bounds which is higher of an index
  // than right if value not found in array.  
  // left <= right prevents this infinite loop
  while (arr[middle] !== value && left <= right) {
    // if value is smaller than middle, move the right pointer down
    if (value < arr[middle]) right = middle - 1;
    // if value is bigger than middle, move left pointer up
    else left = middle + 1;
    middle = Math.floor((left + right) / 2);
  }

  return arr[middle] == value ? middle : -1;
}
console.log(binarySearch([1, 2, 3, 4, 5], 1));
