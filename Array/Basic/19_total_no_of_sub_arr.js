function countTotalNumberOfSubarrays(arr) {
  let count=0;
  for(let i=0;i<arr.length;i++){
    for(let j=i;j<arr.length;j++){
      count++;
    }
  }
  return count;
}

console.log(countTotalNumberOfSubarrays([1, 2, 3])); // 6
console.log(countTotalNumberOfSubarrays([5, 0, 2, 3])); // 10
console.log(countTotalNumberOfSubarrays([10])); // 1
console.log(countTotalNumberOfSubarrays([])); // 0