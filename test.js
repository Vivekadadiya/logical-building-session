const pattern = [5, 4, 3, 2, 1].map((n, i) => {
    let num = '';
    for (let j = 0; j < n; j++) {
        num += i+1;
    }
    return num;
  });
  pattern.reverse();
  console.log(pattern);