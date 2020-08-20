function isPalindrome(str){
  // kayak
  if(str.length === 1) return true;
  if(str.length === 2) return str[0] === str[1];
  if(str[0] === str.slice(-1)) return isPalindrome(str.slice(1,-1))
  // if(1st index === last index) return isPalindrome(string w/ 1st and last char removed)
  return false;
}

console.log(isPalindrome('kayak'));