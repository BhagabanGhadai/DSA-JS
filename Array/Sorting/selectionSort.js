//ascending
function selectionSort(arr) {
    for(let i=0;i<arr.length;i++){
        let low=i
        for(let j=i+1;j<arr.length;j++){
            if(arr[low]>arr[j]){
                low=j
            }
        }
        if(low!=i){
            [arr[i],arr[low]]=[arr[low],arr[i]]
        }
    }
    return arr
}

//descending
function selectionSort(arr){
    for(let i=0;i<arr.length;i++){
        let low=i
        for(let j=i+1;j<arr.length;j++){
            if(arr[low]<arr[j]){
                low=j
            }
        }
        if(low!=i){
            [arr[i],arr[low]]=[arr[low],arr[i]]
        }
    }
    return arr
}

console.log(selectionSort([64, 25, 12, 22, 11])); // [11, 12, 22, 25, 64]
console.log(selectionSort([5, 3, 8, 4, 2])); // [2, 3, 4, 5, 8]
console.log(selectionSort([29, 10, 14, 37, 13])); // [10, 13, 14, 29, 37]
console.log(selectionSort([1])); // [1]
console.log(selectionSort([])); // []