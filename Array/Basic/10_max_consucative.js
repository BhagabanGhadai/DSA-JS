function maxConsucative(arr) {
  let max = 0;
  let tempMax = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] != 1&& max < tempMax) {
      max = tempMax;
      tempMax = 0;
    } else {
        tempMax =tempMax+ arr[i];
    }
    if(i===arr.length-1 && max < tempMax){
        max = tempMax;
    }
  }
  return max
}

function maxConsucative(arr) {
  let max = 0;
  let tempMax = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 1) {
      tempMax++;
    } else {
      max = Math.max(max, tempMax);
      tempMax = 0;
    }
  }
  return Math.max(max, tempMax);
}

console.log(maxConsucative([1, 1, 0, 1, 1, 1]));
console.log(maxConsucative([1, 0, 1, 1, 0, 1]));
