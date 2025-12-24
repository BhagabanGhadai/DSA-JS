function printNumber(n) {
  console.log(n);
  if (n === 1) {
    return;
  }
  n = n - 1;
  printNumber(n);
}

function printNumber(n, m = 1) {
  console.log(m);
  if (m === n) {
    return;
  }
  m = m + 1;
  printNumber(n, m);
}
printNumber(5);
