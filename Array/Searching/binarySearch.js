//N.B - Binary Serach works only on sorted arrays

function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    while(left<=right){
        let mid=Math.floor((left+right)/2)
        if(arr[mid]===target){
            return mid
        }else if(arr[mid]<target){
            left=mid+1
        }else{
            right=mid-1
        }
    }
    return -1
}

console.log(binarySearch([1, 2, 3, 4, 5, 6], 4)); // Output: 3 (index of target element)
console.log(binarySearch([10, 20, 30, 40, 50], 25)); // Output: -1 (not found)
console.log(binarySearch([], 1)); // Output: -1 (not found)
console.log(binarySearch([5], 5)); // Output: 0 (index of target element)