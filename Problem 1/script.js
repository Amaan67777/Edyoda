function reverseNumber(n) {
    let reverse = 0;
    while (n > 0) {
      reverse = reverse * 10 + (n % 10);
      n = Math.floor(n / 10);
    }
    return reverse;
  }
  
  let num = 12345;
  console.log(reverseNumber(num));