const quickSort = (arr, low, high) => {
  if (low < high) {
    const pi = partition(arr, low, high);

    quickSort(arr, low, pi - 1);
    quickSort(arr, pi + 1, high);
  }

  return arr
}


/* This function takes last element as pivot, places the pivot element at its correct position in sorted array, and places all smaller (smaller than pivot) to left of pivot and all greater elements to right of pivot */

const partition = (arr, low, high) => {

  // pivot (Element to be placed at right position)
  const pivot = arr[high];

  let i = (low - 1)  // Index of smaller element and indicates the

  for (let j = low; j <= high - 1; j++) {

    // If current element is smaller than the pivot
    if (arr[j] < pivot) {
      i++;
      swap(arr, i, j)
    }
  }
  swap(arr, i + 1, high)
  return (i + 1)
}

const swap = (arr, i, j) => {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

let arr = [34, 5, 2, 53, 6, 29];
console.log(quickSort(arr, 0, arr.length - 1))
