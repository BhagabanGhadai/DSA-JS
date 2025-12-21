function removeDuplicatesFromSortedArr(arr) {
    return Array.from(new Set(arr));
}

function removeDuplicatesFromSortedArr(arr) {
    const map = new Map();
    for (let i = 0; i < arr.length; i++) {
        map.set(arr[i], true);
    }
    return Array.from(map.keys());
}

function removeDuplicatesFromSortedArr(arr) {
    const map = new Map();
    for (let i = 0; i < arr.length; i++) {
        map.has(arr[i])?map.set(arr[i],map.get(arr[i])+1):map.set(arr[i],1);
    }
    return Array.from(map.keys());
}

function removeDuplicatesFromSortedArr(arr) {
    const map = new Map();
    for (let i = 0; i < arr.length; i++) {
        if (!map.has(arr[i])) {
            map.set(arr[i], true);
        }
    }
    return Array.from(map.keys());
}

function removeDuplicatesFromSortedArr(arr) {
    let i= 0;
    for (let j = 1; j < arr.length; j++) {
        if (arr[i] !== arr[j]) {
            i++;
            arr[i] = arr[j];
        }
    }
    return arr.slice(0, i + 1);
}

function removeDuplicatesFromSortedArr(arr) {
    let i= 0;
    let j=1
    while(j<arr.length){
        if(arr[i]!==arr[j]){
            i++
            arr[i]=arr[j]; 
        }
        j++
    }
    arr.length=i+1
    return arr
}

console.log(removeDuplicatesFromSortedArr([1, 1, 2, 2, 3, 4, 4])); // Output: Set { 1, 2, 3, 4 }