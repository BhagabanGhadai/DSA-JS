function countRotations(arr) {
  let left = 0, right = arr.length - 1;

  while (left < right) {
    let mid = Math.floor((left + right) / 2);

    if (arr[mid] > arr[right]) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  return left;
}
console.log(countRotations([15, 18, 2, 3, 6, 12])) // 2
console.log(countRotations([7, 9, 11, 12, 5])) // 4
console.log(countRotations([7, 9, 11, 12, 15])) // 0