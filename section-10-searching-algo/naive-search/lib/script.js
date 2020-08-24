function naiveSearch(long, short) {
  let count = 0;
  for(let i = 0; i < long.length; i++) {
    for(let j = 0; j < short.length; j++) {
      if(short[j] !== long[i+j]){
        console.log("No character match breaking inner loop") 
        break;
        // chars don't match break loop to iterate i until match of characters again
      } 
      if(j === short.length - 1) count++;
      // if j's index reaches to the end match of word is found +1
      console.log(`short[j]: ${j}, long[i]: ${i}, long[i+j]: ${i+j}`,);
    }
    console.log(`long[i]: ${i}`);
  }
  return count;
}

console.log(naiveSearch("lorie loled", "lol"));
// i+j: 0, "l" 
// j: 0, "l"

// i+j: 1, "o"
// j: 1, "o"

// i+j: 2, "r"
// j: 2, "l" X