function mergeTwoSortedArr(arr1, m, arr2, n) {
  return arr1
    .concat(arr2)
    .sort((a, b) => a - b)
    .slice(m<n?m:n);
}


function mergeTwoSortedArr(arr1, m, arr2, n) {
   let copyArr=JSON.parse(JSON.stringify(arr1))
   let p1=0
   let p2=0
   for(let i=0;i<m+n;i++){
    if(p2>=n||(p1<m&&copyArr[p1]<arr2[p2])){
      arr1[i]=copyArr[p1]
      p1++
    }else{
      arr1[i]=arr2[p2]
      p2++
    }
   }
    return arr1
}

function mergeTwoSortedArr(arr1, m, arr2, n) {
   let p1=m-1
   let p2=n-1
   for(let i=arr1.length-1;i>=0;i--){
    if(p1>=0&&arr1[p1]>arr2[p2]){
      arr1[i]=arr1[p1]
      p1--
    }else{
      arr1[i]=arr2[p2]
      p2--
    }
    if(p2<0)break
   }
   return arr1
}

console.log(mergeTwoSortedArr([1, 1, 2, 2, 3, 0, 0, 0, 0], 5, [2, 2, 5, 6], 4));
console.log(mergeTwoSortedArr([2, 3, 0, 0], 2, [1, 2], 2));
console.log(mergeTwoSortedArr([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3));
console.log(mergeTwoSortedArr([0], 0, [1], 1));
