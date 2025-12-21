function insert(arr,index,value){
  arr.splice(index,0,value);
  return arr;
}

// console.log(insert([1,2,3,4],0,5)); // [1,2,5,3,4]

function insert(arr,index,value){
    let newArr = [];
    for(let i=0;i<arr.length;i++){
        if(i===index){
            newArr.push(value);
        }
        newArr.push(arr[i]);
    }
    if(index>=arr.length){
        newArr[newArr.length] = value;
    }
    return newArr;
}
// console.log(insert([1,2,3,4],4,5)); // [1,2,5,3,4]

function insert(arr,index,value){
    let newArr=[];
    for(let i=0;i<index;i++){
        newArr.push(arr[i]);
    }
    return [...newArr,value,...arr.slice(index)];
}

function insert(arr, index, value) {
  for (let i = arr.length - 1; i >= index; i--) {
    arr[i + 1] = arr[i];
    if (i == index) {
      arr[i] = value;
    }
  }
  if(index>=arr.length){
    arr[index]=value
  }
  return arr;
}

console.log(insert([1,2,3,4],4,5)); // [1,2,5,3,4]
