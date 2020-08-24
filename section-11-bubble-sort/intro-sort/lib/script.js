// function numberCompare(num1, num2) {
//   return num1 - num2;
// }

// document.write([23,45,6,12,13].sort(numberCompare));

// function numberCompare(num1, num2) {
//   return num2 - num1;
// }

// document.write([23,45,6,12,13].sort(numberCompare));

function compareByLength(str1, str2) {
  return str1.length - str2.length;
}

document.write(["hello", "its", "meeeeee", "ive", "bin" , "wondring"].sort(compareByLength));
