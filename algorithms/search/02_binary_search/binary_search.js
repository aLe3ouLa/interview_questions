const binarySearch = (arr, target) => {
  let low = 0;
  let high = arr.length - 1;

  while (low < high) {
    const mid = Math.floor((low + high) / 2);
    if (arr[mid] < target) {
      low = mid + 1;
    } else if (arr[mid] > target) {
      high = mid - 1;
    } else {
      return mid;
    }
  }

  return -1;
}

let found = binarySearch([1, 2, 3, 4, 5], 5);

console.log(found)
