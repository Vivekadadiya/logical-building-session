let pattern = "";
for (let i = 1; i <= 5; i++) {
    for (let num = 1; num <= i; num++) {
        pattern += (5 - i + 1);
    }
    if (i < 5) {
        pattern += "\n";
    }
}
console.log(pattern);