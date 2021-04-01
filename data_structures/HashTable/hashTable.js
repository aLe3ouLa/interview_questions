const _hash = (key, size) => {
  let hashedKey = 0;
  for (let i = 0; i < key.length; i++) {
    hashedKey += key.charCodeAt(i);
  }
  return hashedKey % size;
}

class HashTable {
  constructor() {
    this.buckets = new Array(this.size);
    this.size = 20;

    for (let i = 0; i < this.size; i++) {
      this.buckets[i] = new Map();
    }
  }

  insert(key, value) {
    const hash = _hash(key, this.size);
    this.buckets[hash].set(key, value);
  }

  remove(key) {
    const hash = _hash(key, this.size);
    const deleted = this.buckets[hash].get(key);
    this.buckets[hash].delete(key);
    return deleted;
  }

  search(key) {
    const hash = _hash(key, this.size);
    return this.buckets[hash].get(key);
  }
}

const hashTable = new HashTable();

hashTable.insert('serena', 'moon')
hashTable.insert('amy', 'mercury')
hashTable.insert('rei', 'mars')
hashTable.insert('lita', 'jupiter')
hashTable.insert('mina', 'venus')
hashTable.insert('darien', 'mask')

console.log(hashTable)

console.log(hashTable.search('serena'))
console.log(hashTable.search('rei'))

hashTable.remove('amy')

console.log(hashTable)
