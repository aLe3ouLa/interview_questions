class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.size = 0;
  }

  push(value) {
    const newNode = new Node(value)
    this.size++;
    if (!this.top) {
      this.top = this.bottom = newNode;
    } else {
      newNode.next = this.top;
      this.top = newNode;
    }
  }

  pop() {
    if (!this.top) return null;
    const deleted = this.top.value;
    this.top = this.top.next;
    this.size--;
    return deleted;
  }

  peek() {
    return this.top.value;
  }
}

const myStack = new Stack();


myStack.push("seahorse");
myStack.push("dolphin");
myStack.push("crab");

console.log(myStack)

myStack.pop();

console.log(myStack)

console.log(myStack.peek())
