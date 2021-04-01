class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.previous = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  // add to the end of the list
  append(value) {
    const newNode = new Node(value);
    this.size++;
    if (!this.tail) {
      this.head = this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.previous = this.tail;
      this.tail = newNode;
    }
  }

  // add to the beginning of the list
  prepend(value) {
    const newNode = new Node(value);
    this.size++;
    if (!this.head) {
      this.head = this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.previous = newNode;
      this.head = newNode;
    }
  }

  deleteFront() {
    if (!this.head) return null;
    const deleted = this.head.value;
    this.size--;

    if (this.head == this.tail) {
      this.head = this.tail = null;
    } else {
      this.head = this.head.next;
      this.head.previous = null;
    }

    return deleted;
  }

  deleteTail() {
    if (!this.tail) return null;
    const deleted = this.tail.value;
    this.size--;

    if (this.head === this.tail) {
      this.head = this.tail = null;
    } else {
      this.tail = this.tail.previous;
      this.tail.next = null;
    }

    return deleted;
  }

  search(value) {
    let currentNode = this.head;

    while (currentNode) {
      if (currentNode.value === value) {
        return currentNode;
      }
      currentNode = currentNode.next;
    }

    return null;
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

ll.append('starfish')

// ll.deleteFront()
// ll.deleteTail();


console.log(ll.search('seahorse'))
console.log(ll.search('mermaid'))
