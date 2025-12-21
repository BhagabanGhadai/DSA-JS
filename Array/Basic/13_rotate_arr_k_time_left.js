let arr = [10, 20, 30, 40, 50],
  k = 6;
function rotateLeftArray(arr, k) {
  if (k > arr.length) {
    k = k % arr.length;
  }
  const tempArr = [];
  for (let i = 0; i < k; i++) {
    tempArr.push(arr[i]);
  }
  for (let i = k; i < arr.length; i++) {
    arr[i - k] = arr[i];
  }
  for (let i = arr.length - k; i < arr.length; i++) {
    arr[i] = tempArr[i - (arr.length - k)];
  }
  return arr;
}

function reverseArray(arr, start, end) {
  while (start < end) {
    [arr[start], arr[end]] = [arr[end], arr[start]];
    start++;
    end--;
  }
}

function rotateLeftArray(arr, k) {
  if (k > arr.length) {
    k = k % arr.length;
  }
  reverseArray(arr,0,k-1)
  reverseArray(arr,k,arr.length-1)
  reverseArray(arr,0,arr.length-1)
  return arr
}

console.log(rotateLeftArray(arr, k));
