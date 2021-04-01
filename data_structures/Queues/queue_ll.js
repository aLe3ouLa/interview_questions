class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  enqueue(value) {
    const newNode = new Node(value);
    this.size++;

    if (!this.first) {
      this.first = this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
  }

  dequeue() {
    if (!this.first) return null;
    const deleted = this.first.value;
    this.first = this.first.next;
    this.size--;
    return deleted;
  }

  peek() {
    return this.first.value;
  }
}

let queue = new Queue();

queue.enqueue('Max');
queue.enqueue('Jon');
queue.enqueue('Kyra');

console.log(queue)

queue.dequeue();

console.log(queue)
