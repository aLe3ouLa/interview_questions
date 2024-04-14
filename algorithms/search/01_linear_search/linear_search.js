const linearSearch = (arr, target) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }

  return null;
}

let found = linearSearch([1, 2, 3, 4, 5], 5);

console.log(found)
