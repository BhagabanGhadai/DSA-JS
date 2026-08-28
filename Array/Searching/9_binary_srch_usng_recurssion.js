function binarySearch(arr, target, left = 0, right = arr.length - 1) {
    if (left > right) {
        return -1; // Target not found
    }

    const mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) {
        return mid; // Target found
    } else if (arr[mid] < target) {
        return binarySearch(arr, target, mid + 1, right); // Search in the right half
    } else {
        return binarySearch(arr, target, left, mid - 1); // Search in the left half
    }
}

console.log(binarySearch([1, 2, 3, 4, 5], 3)); // 2
console.log(binarySearch([10, 20, 30, 40, 50], 25)); // -1
console.log(binarySearch([-10, -5, 0, 5, 10], 0)); // 2
console.log(binarySearch([1, 3, 5, 7, 9], 7)); // 3
console.log(binarySearch([2, 4, 6, 8, 10], 2)); // 0