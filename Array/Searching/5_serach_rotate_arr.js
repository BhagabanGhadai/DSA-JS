function searchRotatedArray(arr, target) {
  let left=0
  let right=arr.length-1
  while(left<=right){
    let mid=Math.floor((left+right)/2)
    if(arr[mid]===target){
      return mid
    }
    if(arr[left]<=arr[mid]){
      if(target>=arr[left]&&target<arr[mid]){
        right=mid-1
      }else{
        left=mid+1
      }
    }else{
      if(target>arr[mid]&&target<=arr[right]){
        left=mid+1
      }else{
        right=mid-1
      }
    }
  }
  return -1
}

console.log(searchRotatedArray([4,5,6,7,0,1,2], 0)) // 4
console.log(searchRotatedArray([4,5,6,7,0,1,2], 3)) // -1
console.log(searchRotatedArray([1], 0)) // -1