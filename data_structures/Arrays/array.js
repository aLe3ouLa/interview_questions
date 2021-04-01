class MyArray {
  constructor() {
    this.storage = {};
    this.size = 0;
  }

  push(value) {
    this.storage[this.size++] = value;
  }

  pop() {
    const deleted = this.storage[this.size - 1];
    delete this.storage[this.size - 1];
    this.size--;
    return deleted;
  }

  get(index) {
    if (index < 0 || index > this.size || this.isEmpty) {
      return -1
    }

    return this.storage[index]
  }

  isEmpty() {
    return this.size === 0;
  }

  get length() {
    return this.size;
  }
}

const myArray = new MyArray();

myArray.push("seahorse");
myArray.push("dolphin");
myArray.push("crab");

console.log(myArray)

myArray.pop();

console.log(myArray)

myArray.get(0);
myArray.get(200);
