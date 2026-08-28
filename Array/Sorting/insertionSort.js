//ascending
function insertionSort(arr) {
    for(let i=1;i<arr.length;i++){
        for(let j=i-1;j>=0;j--){
            if(arr[j+1]<arr[j]){
                [arr[j+1],arr[j]]=[arr[j],arr[j+1]]
            }
        }
    }
    return arr
}

//descending
function insertionSort(arr){
    for(let i=1;i<arr.length;i++){
        for(let j=i-1;j>=0;j--){
            if(arr[j]<arr[j+1]){
                [arr[j],arr[j+1]]=[arr[j+1],arr[j]]
            }
        }
    }
    return arr
}
console.log(insertionSort([5, 2, 9, 1, 5, 6])); // [1, 2, 5, 5, 6, 9]
console.log(insertionSort([3, 0, -2, 5, 4])); // [-2, 0, 3, 4, 5]
console.log(insertionSort([10, 7, 8, 9, 1, 5])); // [1, 5, 7, 8, 9, 10]
console.log(insertionSort([1])); // [1]
console.log(insertionSort([])); // []

// complexity O(n^2)