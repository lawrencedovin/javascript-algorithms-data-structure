function charCount(str) {
    // make object to return at end
    let result = {};
    // loop over string, per char
    for(let i=0; i < str.length; i++){
        //if char is a no/letter AND is a key in object, add 1 to count
        let char = str[i].toLowerCase();
        if (result[char] > 0) {
            result[char]++;   
        } 
        //if char is a no/letter AND not in object, add it to object and set value to 1
        else {
            result[char] = 1;
        }
        //if char is something else (space, period, etc.) don't do anything
    }

    return result;
}

// if (typeof str[i] == "number" || typeof str[i] == "string")