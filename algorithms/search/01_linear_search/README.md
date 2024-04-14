# Linear Search

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
