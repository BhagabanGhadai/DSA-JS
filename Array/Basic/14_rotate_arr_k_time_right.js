function rotateArrayRight(arr, k) {
  if (k > arr.length) {
    k = k % arr.length;
  }
  const tempArr = [];
  for (let i = arr.length - k; i < arr.length; i++) {
    tempArr.push(arr[i]);
  }
  for (let i = arr.length - 1; i >= 0; i--) {
    arr[i] = arr[i - k];
  }
  for (let i = 0; i < k; i++) {
    arr[i] = tempArr[i];
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

function rotateArrayRight(arr, k) {
  if (k > arr.length) {
    k = k % arr.length;
  }
  reverseArray(arr, 0, arr.length - 1);
  reverseArray(arr, 0, k - 1);
  reverseArray(arr, k, arr.length - 1);
  return arr;
}

console.log(rotateArrayRight([10, 20, 30, 40, 50], 6));