function quickSort(arr,left = 0, right = arr.length - 1) {
    if (left < right) {
        const pivotIndex = partition(arr, left, right);
        quickSort(arr, left, pivotIndex - 1);
        quickSort(arr, pivotIndex + 1, right);
    }
    return arr;
}
//ascending
function partition(arr, left, right) {
    let pivot=arr[right]
    let i=left
    for(let j=left;j<right;j++){
        if(arr[j]<pivot){
            [arr[i],arr[j]]=[arr[j],arr[i]]
            i++
        }
    }
    return [arr[i],arr[right]]=[arr[right],arr[i]],i
}
//descending
function partition(arr, left, right) {
    let pivot=arr[right]
    let i=left
    for(let j=left;j<right;j++){
        if(arr[j]>pivot){
            [arr[i],arr[j]]=[arr[j],arr[i]]
            i++
        }
    }
    return [arr[i],arr[right]]=[arr[right],arr[i]],i
}

//ascending
function partition(arr, left, right) {
    let pivot=arr[right]
    let i=left
    while(left<right){
        if(arr[left]<pivot){
            [arr[i],arr[left]]=[arr[left],arr[i]]
            i++
        }
        left++
    }
    return [arr[i],arr[right]]=[arr[right],arr[i]],i
}
//descending
function partition(arr, left, right) {
    let pivot=arr[right]
    let i=left
    while(left<right){
        if(arr[left]>pivot){
            [arr[i],arr[left]]=[arr[left],arr[i]]
            i++
        }
        left++
    }
    return [arr[i],arr[right]]=[arr[right],arr[i]],i
}
console.log(quickSort([5, 3, 8, 4, 6]));
console.log(quickSort([7, 2, 1, 6, 8, 5, 3, 4]));