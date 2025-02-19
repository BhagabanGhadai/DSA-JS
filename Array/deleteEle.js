function deleteEle(arr,index){
    return arr.toSpliced(index,1);
}
// console.log(deleteEle([1,2,3,4],3)); 

function deleteEle(arr,index){
    arr.splice(index,1);
    return arr;
}
// console.log(deleteEle([1,2,3,4],1)); 

function deleteEle(arr,index){
    for(let i=index;i<arr.length-1;i++){
        arr[i]=arr[i+1];
    }
    // return arr.slice(0,arr.length-1);
    arr.length=arr.length-1;
    return arr;
}
// console.log(deleteEle([1,2,3,4],3));

function deleteEle(arr,index){
    let newArr=[];
    for(let i=0;i<arr.length;i++){
        if(i<index){
            newArr.push(arr[i]);
        }else if(i>index){
            newArr.push(arr[i]);
        }
    }
    return newArr;
}
console.log(deleteEle([1,2,3,4],2));
