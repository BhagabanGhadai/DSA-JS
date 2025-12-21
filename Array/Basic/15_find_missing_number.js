function findMissingNumber(nums, n) {
  let x = 0
  for (let i = 1; i < n; i++) {
    if (nums[x] + 1 != nums[i]) return nums[i] - 1
    else x++
  }
}


function findMissingNumber(arr, n) {
  let expectedSum = (n * (n + 1)) / 2
  let actualSum = 0

  for (let i = 0; i < arr.length; i++) {
    actualSum += arr[i]
  }

  return expectedSum - actualSum
}

function findMissingNumber(arr, n) {
  let xorAll = 0
  let xorArr = 0

  for (let i = 1; i <= n; i++) {
    xorAll ^= i
  }

  for (let i = 0; i < arr.length; i++) {
    xorArr ^= arr[i]
  }

  return xorAll ^ xorArr
}

console.log(findMissingNumber([1, 2, 4, 5, 6], 6)) // 3
