function removeElementFromArr(arr, element) {
    if(arr.length===0){
        return [];
    }
    let i=0;
    let j=0
    while(j<arr.length){
        if(arr[j]!==element){
            arr[i]=arr[j];
            i++
        }
        j++
    }
    arr.length=i
    return arr
}

function removeElementFromArr(arr, element) {
    if(arr.length===0){
        return [];
    }
    let j=0
   for(let i=0;i<arr.length;i++){
    if(arr[i]!=element){
        arr[j]=arr[i]
        j++
    }
   }
    arr.length=j
    return arr
}

console.log(removeElementFromArr([1, 2, 3, 4, 2, 5], 2)); // Output: [1, 3, 4, 5]
console.log(removeElementFromArr([5, 6, 7, 8, 9], 10)); // Output: [5, 6, 7, 8, 9]
console.log(removeElementFromArr([], 1)); // Output: []
console.log(removeElementFromArr([1, 1, 1, 1], 1)); // Output: []