function intersectionOfSortedArrays(arr1, arr2) {
  const map = new Map();
  for (let arr of arr1) {
    if (!map.has(arr)) {
      map.set(arr, true);
    }
  }

  for (let keys of map.keys()) {
    if (!arr2.includes(keys)) {
      map.delete(keys);
    }
  }

  return Object.keys(Object.fromEntries(map)).map(Number);
}

function intersectionOfSortedArrays(arr1, arr2) {
  let intersection = [];
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (
        arr1[i] === arr2[j] &&
        arr1[i] !== intersection[intersection.length - 1]
      )
        intersection.push(arr1[i]);
    }
  }
  return intersection;
}

function intersectionOfSortedArrays(arr1, arr2) {
  let i = 0;
  let j = 0;
  let intersection = [];
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      i++;
    } else if (arr1[i] === arr2[j]) {
      if (arr1[i] != intersection[intersection.length - 1]) {
        intersection.push(arr1[i]);
      }
      i++;
      j++;
    } else if (arr1[i] > arr2[j]) {
      j++;
    }
  }

  return intersection;
}

console.log(intersectionOfSortedArrays([1, 1, 2], [2, 3, 4, 4, 5])); // [2]
console.log(intersectionOfSortedArrays([1, 2, 2, 3], [2, 2, 3, 4])); // [2, 3]
console.log(intersectionOfSortedArrays([1, 3, 5], [2, 4, 6])); // []
console.log(intersectionOfSortedArrays([], [1, 2, 3])); // []
console.log(intersectionOfSortedArrays([1, 2, 3], [])); // []
