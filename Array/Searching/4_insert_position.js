function searchInsertPosition(arr, target) {
  let left = 0, right = arr.length - 1;
  let result = arr.length;   // default insert at end

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (arr[mid] >= target) {
      result = mid;
      right = mid - 1;
    } 
    else {
      left = mid + 1;
    }
  }
  return result;
}

console.log(searchInsertPosition([1,3,5,6], 5)); // 2
console.log(searchInsertPosition([1,3,5,6], 2)); // 1
console.log(searchInsertPosition([1,3,5,6], 7)); // 4
console.log(searchInsertPosition([1,3,5,6], 0)); // 0
