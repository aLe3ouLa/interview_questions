class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
    this.size = 0;
  }

  size() {
    return this.size;
  }

  insert(value) {
    const newNode = new Node(value);
    this.size++;

    if (!this.root) {
      this.root = newNode;
    } else {
      let currentNode = this.root;

      while (currentNode) {
        if (currentNode.value > value) {
          if (!currentNode.left) {
            currentNode.left = newNode;
            return;
          }
          currentNode = currentNode.left;
        } else {
          if (!currentNode.right) {
            currentNode.right = newNode;
            return;
          }
          currentNode = currentNode.right;
        }
      }
    }

  }

  min() {
    let currentNode = this.root;

    while (currentNode.left !== null) {
      currentNode = currentNode.left;
    }

    return currentNode.value;
  }

  max() {
    let currentNode = this.root;

    while (currentNode.right !== null) {
      currentNode = currentNode.right;
    }

    return currentNode.value;
  }

  contains(value) {
    let currentNode = this.root;

    while (currentNode) {
      if (currentNode.value > value) {
        currentNode = currentNode.left;
      } else if (currentNode.value < value) {
        currentNode = currentNode.right;
      } else {
        return true;
      }
    }

    return -1;
  }

  //Depth first search

  preOrder() {
    let result = [];
    const preorderHelper = (node) => {
      result.push(node.value);
      if (node.left) preorderHelper(node.left);
      if (node.right) preorderHelper(node.right);
    }

    preorderHelper(this.root)

    return result;
  }

  postOrder() {
    let result = [];
    const preorderHelper = (node) => {
      if (node.left) preorderHelper(node.left);
      if (node.right) preorderHelper(node.right);

      result.push(node.value);
    }

    preorderHelper(this.root)

    return result;
  }

  inOrder() {
    let result = [];
    const preorderHelper = (node) => {
      if (node.left) preorderHelper(node.left);
      result.push(node.value);
      if (node.right) preorderHelper(node.right);
    }

    preorderHelper(this.root)

    return result;
  }

  //breadth first search

  bfs() {
    let queue = [];
    let res = [];

    queue.push(this.root);

    while (queue.length > 0) {
      let del = queue.shift();
      res.push(del.value)
      if (del.left) queue.push(del.left)
      if (del.right) queue.push(del.right)
    }
    return res;
  }
}

const bst = new BinarySearchTree();

bst.insert(9);
bst.insert(4);
bst.insert(6);
bst.insert(1);
bst.insert(13);

console.log(bst.min())
console.log(bst.max())

console.log(bst.contains(6))
console.log(bst.contains(16))

console.log(bst.bfs())
