function longestSubArrayWithGivenValue(arr, value) {
  let maxLen = 0;
  let currLen = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === value) {
      currLen++;
      maxLen = Math.max(maxLen, currLen);
    } else {
      currLen = 0;
    }
  }

  return maxLen;
}

console.log(longestSubArrayWithGivenValue([1, 2, 2, 3, 2, 2, 2, 4], 2)); // 3
console.log(longestSubArrayWithGivenValue([5, 5, 5, 5, 5], 5)); // 5
console.log(longestSubArrayWithGivenValue([1, 2, 3, 4], 6)); // 0
console.log(longestSubArrayWithGivenValue([], 1)); // 0