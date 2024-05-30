# Algorithms and Complexities

## What is an algorithm?

An algorithm is a list of instructions for solving a particular problem. It is often compared to the equivelent of a recipe in cooking. Just as a recipe tells you step-by-step how to make a dish, an algorithm provides a series of steps to achieve a specific goal.

An algorithm usually has 3 basic ingredients:

1. **_Input_**: You start with some initial information
2. **_Process_**: You follow a series of steps
3. **_Output_**: You get a result or a solution

For example, if your problem instructs you to sort a list of numbers from smallest to largest, you will have:

1. **_Input_**: Your initial unsorted list of numbers
2. **_Process_**: Instructions on how you will sort these numbers
3. **_Output_**: Your list sorted from smallest to largest number

In computer science, algorithms are used to solve problems. Some common problems include searching information, sorting data or performing calculations.

## Asymptotic analysis - Big-O

Everything we do in programming can be thought as a list of instructions. The computer is a dumb machine and we tell it what to do. So, algorithms is an essential part of our day-to-day job.

Every set of instructions we can think requires space and time to be executed. So a new concept that goes hands-to-hand with the existence of algorithms is _time and space complexity_.

## ELI5 Big 0

Big-O notation is a way to describe how the time or space requirements of an algorithm grow as the input size increases. It's a way to measure the efficience and scalability of our set of instructions when our input gets very large.

### An example

```javascript
const fish = ['dory', 'nemo'];

function findNemo(array) {
  for (let i = 0; i <= array.length; i++) {
    if ((array[i] = 'nemo')) {
      console.log('I found nemo!');
    }
  }
}
```

In the function `findNemo`, we are searching for a specific value in an array. We take as an input an array of strings and trying to find the word 'nemo' in them. We’re using a for-loop to iterate through each value in the array and check whether it equals the target value.

### What is our worst-case scenario?

In the worst case scenario, our array will be large and the value either won’t be there or it will be the last element of the array.

That means we will have to check every element in the array. As the length of the array increases, the time to execute this algorithm increases in direct correlation. If we have 4 elements in our array, we will iterate in the for-loop four times. If we have 1 billion elements, we will iterate in the for-loop 1 billion times.

As the input increases, the operations increase linearly and it is executed in linear time O(n).

## Big-O, Big-Theta, Big-Omega

Academics use these three notations to describe the efficiency of an algorithm

- **Big-O**: In academia, Big-0 describes an **upper bound** on time. In the above example, this operation can be describes as O(n). But it also could be O(n^2) or any runtime bigger than O(n). _The algorithm is at least as fast as each of these._
- **Big-Omega**: Big-Omega is the equivelant concept for a **lower bound**. Traversing all the elements of an array is Ω(n) but also Ω(logn) or Ω(1).
- **Big-Theta**: Big-Theta means both Big-O and Big-Omega. An algorithm that is Θ(n) is both O(n) and Ω(n).

In industry, people tend to merge Θ and O together.

## Space Complexity

Big-O describes the time that an algorithm scales. But we might also care on the amount of memory an algorithm requires.
Space complexity is a parallel concept to the time complexity. If we need to create an array of size n for our algorithm, then this algorithm requires O(n) space.

## Rules for Simplifying the Big-0

### 1: We count the worst case scenario

Imagine we have an array of numbers and we are lucky enough to find the element in the first position of this array. Will this make the complexity constant?

Actually no, these wonderful sitautions won't happen often. We rarely discuss a best case complexity, because it is not a very useful concept. For most algorithms, the worst and expected case are the same.

### 2: Drop the constants

```javascript
function minmax(array) {
  let min = 0;
  let max = 0;
  for (let i = 0; i <= array.length; i++) {
    if (array[i] < array[min]) {
      min = i;
    }
  }

  for (let j = 0; j <= array.length; j++) {
    if (array[j] > array[max]) {
      max = j;
    }
  }

    return [min,max]
}

console.log(minmax([11,23,4,2,5,6,7,8,9,10]));

```

In this above example there are two for-loops in the array of size N. One might tempted to count the number of instructions, but this is a complicated road to take. Big-O allows us to express how the runtime scales. O(2N) scales proportianaly to O(N), both are linear. So we can drop the constants and say that the algorithm is O(N).

Rule 3: Different terms for different inputs
Rule 4: Drop the non-dominant terms
