function findTheGreatestNumber(arr) {
    return Math.max(...arr);
}

function findTheGreatestNumber(arr) {
    let greast=Number.NEGATIVE_INFINITY;
    for(let i=0;i<arr.length;i++){
        if(arr[i]>greast){
            greast=arr[i];
        }
    }
    return greast;
}
console.log(findTheGreatestNumber([3, 5, 7, 2, 8])); // Output: 8
console.log(findTheGreatestNumber([-10, -3, -6, -2])); // Output: -2