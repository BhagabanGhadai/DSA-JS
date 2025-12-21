function reverseArray(arr) {
    return arr.reverse();
}

function reverseArray(arr) {
    for( let i=arr.length-1,j=0;i>j;i--,j++){
        [arr[j],arr[i]]=[arr[i],arr[j]]
    }
    return arr;
}

function reverseArray(arr) {
    let left=0
    let right=arr.length-1
    while(left<right){
        [arr[left],arr[right]]=[arr[right],arr[left]]
        left++
        right--
    }
    return arr
}

function reverseArray(arr) {
    let newArr = [];
    for(let i=arr.length-1;i>=0;i--){
        newArr.push(arr[i])
    }
    return newArr
}

console.log(reverseArray([1, 2, 3, 4, 5])); // Output: [5, 4, 3, 2, 1]
