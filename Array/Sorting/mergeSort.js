function mergeSort(arr, left = 0, right = arr.length - 1) {
    if(left>=right) return arr;
    const mid = Math.floor((left + right) / 2);
    mergeSort(arr, left, mid);
    mergeSort(arr, mid + 1, right);
    merge(arr, left, mid, right);
    return arr;
}
function merge(arr, left, mid, right) {
    const leftArr = arr.slice(left, mid + 1);
    const rightArr = arr.slice(mid + 1, right + 1);
    let i = 0, j = 0, k = left;
    while (i < leftArr.length && j < rightArr.length) {
        if (leftArr[i] <= rightArr[j]) {
            arr[k++] = leftArr[i++];
        } else {
            arr[k++] = rightArr[j++];
        }
    }
    while (i < leftArr.length) {
        arr[k++] = leftArr[i++];
    }
    while (j < rightArr.length) {
        arr[k++] = rightArr[j++];
    }
}
console.log(mergeSort([5, 3, 8, 4, 6]));
console.log(mergeSort([9, 7, 5, 3, 1, 2, 4, 6, 8]));