function leadersInArray(arr) {
  const leaders = [];
  let maxFromRight = -Infinity;

  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] > maxFromRight) {
      leaders.push(arr[i]);
      maxFromRight = arr[i];
    }
  }
  for (let i = 0, j = leaders.length - 1; i < j; i++, j--) {
    [leaders[i], leaders[j]] = [leaders[j], leaders[i]];
  }
  return leaders
}

function leadersInArray(arr) {
  const leaders = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] <= arr[j]) {
        break;
      }
      if (j === arr.length - 1) {
        leaders.push(arr[i]);
      }
    }
    if (i === arr.length - 1) {
      leaders.push(arr[i]);
    }
  }
  return leaders;
}

console.log(leadersInArray([16, 17, 4, 3, 5, 2])); // [17, 5, 2]
console.log(leadersInArray([1, 2, 3, 4, 0])); // [4, 0]
console.log(leadersInArray([7])); // [7]
console.log(leadersInArray([5, 4, 3, 2, 1])); // [5, 4, 3, 2, 1]