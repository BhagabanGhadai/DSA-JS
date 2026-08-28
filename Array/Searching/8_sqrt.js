function singleNonDuplicate(arr) {
    let left = 0, right = arr.length - 1;

    while (left < right) {
        let mid = Math.floor((left + right) / 2);
    }
}

console.log(singleNonDuplicate([1,1,2,3,3,4,4,8,8])) // 2
console.log(singleNonDuplicate([3,3,7,7,10,11,11])) // 10
console.log(singleNonDuplicate([1,1,2])) // 2
console.log(singleNonDuplicate([1,2,2])) // 1
console.log(singleNonDuplicate([1])) // 1