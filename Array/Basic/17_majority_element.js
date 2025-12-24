function findMajorityElement(arr) {
  const expectedCount = Math.floor(arr.length / 2);
  const map = new Map();
  for (let i = 0; i < arr.length; i++) {
    if (map.has(arr[i])) {
      map.set(arr[i], map.get(arr[i]) + 1);
    } else {
      map.set(arr[i], 1);
    }
    if (map.get(arr[i]) > expectedCount) {
      return arr[i];
    }
  }
  return -1;
}

function findMajorityElement(arr) {
  const expectedCount = Math.floor(arr.length / 2);
  for (let i = 0; i < arr.length; i++) {
    let count = 0;
    for (let j = i; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        count++;
      }
      if (count > expectedCount) {
        return arr[i];
      }
    }
  }
  return -1;
}
//Moore's Voting Algorithm
function findMajorityElement(arr) {
  let candidate = null;
  let count = 0;

  // Phase 1: Find candidate
  for (let i = 0; i < arr.length; i++) {
    if (count === 0) {
      candidate = arr[i];
      count = 1;
    } else if (arr[i] === candidate) {
      count++;
    } else {
      count--;
    }
  }

  // Phase 2: Verify candidate
  count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === candidate) {
      count++;
    }
  }

  return count > Math.floor(arr.length / 2) ? candidate : -1;
}


console.log(findMajorityElement([3, 3, 4, 2, 4, 4, 2, 4, 4])); //4
console.log(findMajorityElement([3, 3, 4, 2, 4, 4, 2, 4])); //-1
