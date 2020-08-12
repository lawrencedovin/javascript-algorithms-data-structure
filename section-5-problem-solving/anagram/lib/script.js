function validAnagram(first, second) {
    if(first.length !== second.length){
        return false;
    }

    const lookup = {};

    for(let i = 0; i < first.length; i++) {
        let letter = first[i];
        // if letter exists, increment, otherwise set to 1
        lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
    }

    // {a: 3, n: 1, g: 1, r: 1, m: 1}

    for(let i = 0; i < second.length; i++) {
        let letter = second[i];
        // stores 1st letter
        if(!lookup[letter]){
            // can't find letter or letter is zero then it's not an anagram
            return false;
        } else {
            lookup[letter] -= 1;
            // {a: 0, n: 0, g: 0, r: 0, m: 0}
            // validAnagram('anagrams', 'nagaramm');
            // if it tries to find m at the end of the 2nd string in anagrams it will return
            // falsey because it is set at 0 already 0 = false/ not found
        }
    }

    return true;
}

validAnagram('anagram', 'nagaram');