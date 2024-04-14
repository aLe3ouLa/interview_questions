# Searching algorithms

Searching is a fundamental process in Data Structures. It refers on the process of locating a specific element (target element) within a collection of data (search space).

Target is:

- to test if element exists or not within the collection
- to identify its location or retrieve it.

_USE CASES:_ information retrieval, data analysis, decision-making processes

## 1. Linear Search

**Overview:**
Linear search is one of the simplest searching algorithms. It sequentially checks each element in a collection until a match is found or the entire collection has been traversed.

**How it works?**

Linear search algorithm examines one by one element in the collection of data until a match is found or the entire collection has been traversed.

**Algorithm:**

1. Examine each element for a potential match for the key you are searching for.
2. If it finds any element that is exactly the same, the search was successful, and returns the index or the item.
3. If it traverses all the elements, and none of it matches the search, then return false or -1 or "Not found".

**Time Complexity:**

- Best case: The item is present at the first index. So it is O(1).
- Worst case: The item is either not present or present at the last index. So in the worst case, we have to traverse the whole collection. So it is O(N), where N is the size of the collection.
- Average case: O(N).

**Space Complexity:**

We have a variable to traverse through the collection. So O(1)

**Advantages:**

- Simple to implement.
- Works on both sorted and unsorted data.

**Disadvantages:**

- Inefficient for large datasets as it has a time complexity of O(N).
- Not suitable for situations requiring faster search algorithms.

- **Comparison with Other Algorithms:**
- Compared to binary search, linear search does not require the data to be sorted beforehand, but it has a higher time complexity.
- Hash tables offer constant time complexity for search operations but require additional space and might not be suitable for all types of data.

**Use Cases:**

- In small collections of data.
- Unsorted data.

```javascript
function linearSearch(arr, key) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === key) {
      return i; // Return index if found
    }
  }
  return -1; // Return -1 if not found
}

// Example usage:
const arr = [5, 8, 4, 6, 9];
const key = 6;
const result = linearSearch(arr, key);
if (result !== -1) {
  console.log(`Element ${key} found at index ${result}`);
} else {
  console.log(`Element ${key} not found`);
}
```

## 2. Binary Search

**Overview:**
Binary search is an efficient algorithm for sorted lists. It repeatedly divides the collection in half until the element is found or there are no other elements left to search.

**How it works?**

Binary search compares the target element to the middle element of the list. If they are not equal, we compare the element and eliminate an interval. The search continues by eliminating halfs of the list until the element is found.

**Algorithm:**

1. Compare the target value with the middle element of the list.
2. If the target value matches the middle element, return the index.
3. If the target value is less than the middle element, continue searching on the left half of the list.
4. If the target value is greater than the middle element, continue searching on the right half of the list.
5. Repeat the process until the target is found or there are no more elements to search

**Time Complexity:**

- Best case: The item is present at the middle of the list. So it is O(1).
- Worst case: O(logN), where N is the number of elements in the collection
- Average case: O(logN).

**Space Complexity:**

Binary search requires only a few variables, so it has a complexity of O(1).

**Advantages:**

- Highly efficient for large datasets due to its logarithmic complexity.
- Works well on sorted lists.

**Disadvantages:**

- Requires the list to be sorted beforehand.
- Not suitable for unsorted lists or dynamic datasets.

**Use Cases:**

- Searching in sorted datasets.
- When dast search times are required.

```javascript
function binarySearch(arr, key) {
  let low = 0;
  let high = arr.length - 1;
  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    if (arr[mid] < target) {
      low = mid + 1;
    } else if (arr[mid] > target) {
      high = mid - 1;
    } else {
      return mid;
    }
  }
  return -1; // Return -1 if not found
}

// Example usage:
const arr = [2, 4, 6, 8, 10, 12, 14];
const key = 10;
const result = binarySearch(arr, key);
if (result !== -1) {
  console.log(`Element ${key} found at index ${result}`);
} else {
  console.log(`Element ${key} not found`);
}
```
