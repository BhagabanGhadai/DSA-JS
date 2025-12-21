function findSecondLargest(arr) {
     let largest = Number.NEGATIVE_INFINITY;
    let secondLargest = Number.NEGATIVE_INFINITY;
    for (let i = 0; i < arr.length; i++) {
        let num=arr[i];
        if(num>largest){
            secondLargest=largest;
            largest=num;
        }else if(num>secondLargest&&num<largest){
            secondLargest=num
        }
    }
    if(secondLargest===Number.NEGATIVE_INFINITY){
        return "No second distinct largest number exists";
    }
    return secondLargest 
}

function getSecondLargestSort(arr) {
  const uniqueArr = [...new Set(arr)];

  uniqueArr.sort((a, b) => b - a);

  if (uniqueArr.length < 2) {
    return "No second distinct largest number exists";
  }
  
  return uniqueArr[1];
}



console.log(findSecondLargest([3, 5, 7, 2, 8])); // Output: 7
console.log(findSecondLargest([-10, -3, -6, -2])); // Output: -3
console.log(getSecondLargestSort([100, 20, 100, 50])); // Output: 50