function longestContinuousIncreasingSubarray(arr) {
  let x=arr[0]
  let count=0
  let tempCount=1
  for(let i=1;i<arr.length;i++){
    if(arr[i]>x){
      tempCount++
      x=arr[i]
    }else{
      x=arr[i]
    }
    if(count<tempCount) {
        count=tempCount
        tempCount=1
      }
  }
  return count
}

function longestContinuousIncreasingSubarray(arr) {
  if (arr.length === 0) return 0

  let maxLen = 1
  let currLen = 1

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > arr[i - 1]) {
      currLen++
    } else {
      maxLen = Math.max(maxLen, currLen)
      currLen = 1
    }
  }

  // final check (important)
  maxLen = Math.max(maxLen, currLen)

  return maxLen
}

console.log(longestContinuousIncreasingSubarray([1, 3, 5, 4, 7])); // 3
console.log(longestContinuousIncreasingSubarray([2, 2, 2, 2, 2])); // 1
console.log(longestContinuousIncreasingSubarray([10, 9, 2, 5, 3, 7, 101, 18])); // 3
console.log(longestContinuousIncreasingSubarray([])); // 0