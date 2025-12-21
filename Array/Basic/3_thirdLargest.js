const arr = [0, 1, 0, 3, 12]

function moveZerosToEnd(arr) {
    let j=0
    for(let i=0;i<arr.length;i++){
        if(arr[i]!=0){
            [arr[j],arr[i]]=[arr[i],arr[j]]
            j++
        }
    }
    return arr
}

console.log(moveZerosToEnd(arr))