let numbersArray = [1,2,3,4,5];

numbersArray.map((item) => {
    let pattern = "";
    for (let num = 1; num <= item; num++) {
        pattern += (5 - item + 1);
    }
    console.log(pattern);
});
