function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i; // Return the index if the target is found
        }
    }
    return -1; // Return -1 if the target is not found
}
console.log(linearSearch([1, 2, 3, 4, 5], 3)); // Output: 2 // Output: Index of target element
console.log(linearSearch([10, 20, 30, 40, 50], 25)); // Output: -1 // Output: -1 (not found)