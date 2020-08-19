//charCount string if found object[char]++ else object[char] = 1;
//returns the list of object with it's values
//has to be alphanumeric and lowercase

// function charCount(str){
//     let object = {};
//     for(let i = 0; i < str.length; i++) {
//         let char = str[i].toLowerCase();
//         if(/[a-z0-9]/.test(char)) {
//             if (object[char] > 0) {
//                 object[char]++;
//             } 
//             else {
//                 object[char] = 1;
//             }
//         }
//     }
//     return object;
// }

// console.log(charCount('lawrnece is really cool!.'));

// function charCount(str){
//     let object = {};
//     for(let char of str) {
//         char = char.toLowerCase();
//         if(/[a-z0-9]/.test(char)) {
//             object[char] > 0 ? object[char]++ : object[char] = 1;
//         }
//     }
//     return object;
// }

// function charCount(str){
//     let object = {};
//     for(let char of str) {
//         char = char.toLowerCase();
//         if(/[a-z0-9]/.test(char)) {
//             object[char] = ++object[char] || 1;
//             // If object[char] is true / 1
//             // assign object[char]++
//             // else if false / 0
//             // assign 1
//         }
//     }
//     return object;
// } 

// console.log(charCount("Lawrence"))

//charCount string if found object[char]++ else object[char] = 1;
//returns the list of object with it's values
//has to be alphanumeric and lowercase

function isAlphaNumeric(char){
    var code = char.charCodeAt(0);
    if(!(code > 47 && code < 58) && // numeric (0-9)
       !(code > 64 && code < 91) && // upper alpha (A-Z)
       !(code > 96 && code < 123)) { // lower alpha (a-z)
           return false;
           // if ! or space returns false
       }
    return true;
}

function charCount(str){
    let object = {};
    for(let char of str) {
        char = char.toLowerCase();
        if(isAlphaNumeric(char)) {
            object[char] = ++object[char] || 1;
            // If object[char] is true / 1
            // assign object[char]++
            // else if false / 0
            // assign 1
        }
    }
    return object;
} 
