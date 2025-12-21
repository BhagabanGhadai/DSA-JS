function moveZeroToEnd(arr) {
    let p1=0
    for(let i=0;i<arr.length;i++){
        if(arr[i]!=0){
            [arr[p1],arr[i]]=[arr[i],arr[p1]]
            p1++
        }
    }
    return arr
}

function moveZeroToEnd(arr) {
    let p1=0
    let p2=0
    while(p2<arr.length){
        if(arr[p2]!==0){
            [arr[p1],arr[p2]]=[arr[p2],arr[p1]]
            p1++
        }
        p2++
    }
    return arr
}

console.log(moveZeroToEnd([0,0,1,0,0,3,1,5]))
console.log(moveZeroToEnd([1,0,0,3,0,4,5]))
console.log(moveZeroToEnd([0,1,0,0,3,0,2,5,0,0]))
