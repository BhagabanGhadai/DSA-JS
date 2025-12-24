function sumOfAllOddNumbers(arr, n) {
  if (n <= 0) {
    return 0;
  }
  if (arr[n] % 2) {
    return 0 + sumOfAllOddNumbers(arr, n - 1);
  } else {
    return arr[n-1] + sumOfAllOddNumbers(arr, n - 1);
  }
}

console.log(sumOfAllOddNumbers([1, 2, 3, 4, 5],5));
