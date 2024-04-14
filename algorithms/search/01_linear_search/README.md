## 1. Linear Search

Linear search is one of the simplest searching algorithms.

### How it works?

Linear search algorithm examines one by one element in the collection of data until a match is found or the entire collection has been traversed.

_Algorithm:_

- Examine each element for a potential match for the key you are searching for
- If it finds any element that is exactly the same, the search was successful, and returns the index or the item
- If it traverse all the elements, and none of it matches the search, then return false or "Not found"

### Time Complexity

_Best case:_ The item is present at the first index. So it is O(1)
_Worst case:_ The item is either not present or present on the last index. So in worst case we have to traverse the whole collection. So it is O(N), N is the size of the collection
_Average case:_ O(N)

### Space Complexity

We have a variable to traverse through the collection. So O(1)

### Usa cases

- In small collections of data
- Unsorted data
