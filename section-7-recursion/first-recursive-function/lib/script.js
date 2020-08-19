function countDown(num) {
    // 1. Make a Base Case which does a final return
    if(num < 1) {
        console.log("Countdown complete");
        return;
    }

    // 2. Do an action if Base Case isn't met

    console.log(num);
    num--;

    // 3. Call the recursive function to repeat the previous steps
    // until Base Case is met
    countDown(num);
}

console.log(countDown(4));