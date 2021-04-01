class Queue {
  constructor() {
    this.storage = {};
    this.head = 0;
    this.tail = 0;
  }

  enqueue(value) {
    this.storage[this.tail++] = value;
  }

  dequeue() {
    const deleted = this.storage[this.head];
    delete this.storage[this.head];
    this.head++;
    return deleted;
  }

  peek() {
    return this.storage[0];
  }
}

let queue = new Queue();

queue.enqueue('Max');
queue.enqueue('Jon');
queue.enqueue('Kyra');

console.log(queue)

queue.dequeue();

console.log(queue)
