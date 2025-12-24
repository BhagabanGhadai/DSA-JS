function sumOfAllElements(arr, n) {
    if (n <= 0) {
        return 0;
    }
    return arr[n - 1] + sumOfAllElements(arr, n - 1);
}

function sumOfAllElements(arr) {
    if (arr.length <= 0) {
        return 0;
    }
    return arr[arr.length - 1] + sumOfAllElements(arr.slice(0,arr.length-1));
}

console.log(sumOfAllElements([1, 2, 3, 4, 5], 5));