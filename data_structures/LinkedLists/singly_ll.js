class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  append(value) {
    const newNode = new Node(value);
    this.size++;
    if (!this.head) {
      this.head = this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }

  prepend(value) {
    const newNode = new Node(value);
    this.size++;
    if (!this.head) {
      this.head = this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
  }

  deleteFront() {
    if (!this.head) return -1;
    const deleted = this.head.value;
    this.head = this.head.next;
    this.size--;
    return deleted;
  }

  deleteTail() {
    if (!this.tail) return -1;
    if (!this.tail.next) {
      this.head = this.tail = null;
      return this.tail;
    }
    const deleted = this.tail.value;
    this.size--;

    let currentNode = this.head;
    while (currentNode.next.next !== null) {
      currentNode = currentNode.next;
    }

    currentNode.next = null;
    this.tail = currentNode;

    return deleted;
  }

  get(index) {
    if (index < 0 || index > this.length || this.isEmpty()) {
      return -1;
    }

    let currentNode = this.head;
    let i = 1;
    while (i < index && currentNode !== null) {
      currentNode = currentNode.next;
      i++;
    }

    return currentNode.value;
  }

  get length() {
    return this.size;
  }

  isEmpty() {
    return this.size === 0;
  }
}


const ll = new LinkedList();

ll.prepend('seahorse')
ll.prepend('dolphin')
ll.prepend('crab')

ll.append('clown fist');

// ll.deleteFront();
// ll.deleteTail();

console.log(ll.get(2))
