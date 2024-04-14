# Binary Search

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
