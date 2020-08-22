function naiveSearch(long, short) {
  let count = 0;
  for(let i = 0; i < long.length; i++) {
    for(let j = 0; j < short.length; j++) {
      if(short[j] !== long[i+j]) break;
      // if no match break out to outer loop to iterate
      if(j === short.length - 1) count++;
    }
  }
  return count;
}

console.log(naiveSearch("lorie loled", "lol"));
// i: "l"
// j: "l"

// i: "o"
// j: "o"

// i: "r"
// j: "l" X