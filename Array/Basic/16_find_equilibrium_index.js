function findEquilibriumIndex(arr) {
  let equilibriumIndex=-1
  let sum=0
  let leftSum=0
  for(let i=0;i<arr.length;i++){
    sum+=arr[i]
  }

  for(let i=0;i<arr.length;i++){
    if (i > 0) leftSum += arr[i - 1]
    sum-=arr[i]
    if(sum===leftSum) return i
  }
  return equilibriumIndex
}

console.log(findEquilibriumIndex([1, 3, 5, 2, 2]))
console.log(findEquilibriumIndex([1, 2, 3]))