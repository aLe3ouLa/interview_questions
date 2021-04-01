class Stack {
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

  peek() {
    return this.storage[this.length - 1];
  }
}
