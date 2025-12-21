function unionOfSortedArrays(arr1, arr2) {
  return Array.from(new Set([...arr1, ...arr2]));
}

function unionOfSortedArrays(arr1, arr2) {
  const map = new Map();
  for (const num of arr1) {
    map.set(num, true);
  }
  for (const num of arr2) {
    map.set(num, true);
  }
  return Array.from(map.keys());
}

function unionOfSortedArrays(arr1, arr2) {
  const set = new Set();
  for (const num of arr1) {
    set.add(num);
  }
  for (const num of arr2) {
    set.add(num);
  }
  return Array.from(set);
}

function unionOfSortedArrays(arr1, arr2) {
  const union = [];
  let lastELement = null;
  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      if (lastELement != arr1[i]) {
        union.push(arr1[i]);
        lastELement = arr1[i];
        i++;
        continue;
      }
      i++;
      continue;
    } else {
      if (lastELement != arr2[j]) {
        union.push(arr2[j]);
        lastELement = arr2[j];
        j++;
        continue;
      }
      j++;
      continue;
    }
  }
  while (i < arr1.length) {
    if (lastELement != arr1[i]) {
      union.push(arr1[i]);
      lastELement = arr1[i];
      i++;
      continue;
    }
    i++;
    continue;
  }
  while (j < arr2.length) {
    if (lastELement != arr2[j]) {
      union.push(arr2[j]);
      lastELement = arr2[j];
      j++;
      continue;
    }
    j++;
    continue;
  }
  return union;
}

function unionOfSortedArrays(arr1, arr2) {
  const union = [];
  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      if (union[union.length-1] != arr1[i]) {
        union.push(arr1[i]);
      }
      i++;
    } else {
      if (union[union.length-1] != arr2[j]) {
        union.push(arr2[j]);
      }
      j++;
    }
  }

  while (i < arr1.length) {
    if (union[union.length-1] != arr1[i]) {
      union.push(arr1[i]);
    }
    i++;
  }

  while (j < arr2.length) {
    if (union[union.length-1] != arr2[j]) {
      union.push(arr2[j]);
    }
    j++;
  }

  return union;
}

function unionOfSortedArrays(arr1, arr2) {
  const union = [];
  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      if (union[union.length - 1] !== arr1[i]) union.push(arr1[i]);
      i++;
    } else if (arr2[j] < arr1[i]) {
      if (union[union.length - 1] !== arr2[j]) union.push(arr2[j]);
      j++;
    } else {
      if (union[union.length - 1] !== arr1[i]) union.push(arr1[i]);
      i++;
      j++;
    }
  }

  while (i < arr1.length) {
    if (union[union.length-1] != arr1[i]) {
      union.push(arr1[i]);
    }
    i++;
  }

  while (j < arr2.length) {
    if (union[union.length-1] != arr2[j]) {
      union.push(arr2[j]);
    }
    j++;
  }

  return union;
}
console.log(unionOfSortedArrays([1, 1, 2 ], [2, 3, 4, 4, 5]));
