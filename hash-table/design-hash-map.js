// Design a HashMap without using any built-in hash table libraries

/*
Implement the MyHashMap class:

MyHashMap() initializes the object with an empty map.
void put(int key, int value) inserts a (key, value) pair into the HashMap. If the key already exists in the map, update the corresponding value.
int get(int key) returns the value to which the specified key is mapped, or -1 if this map contains no mapping for the key.
void remove(key) removes the key and its corresponding value if the map contains the mapping for the key.
*/

class MyHashMap {
  constructor() {
    this.map = {}
  }

  put(key, value) {
    this.map[key] = value
  }

  get(key) {
    return this.map[key] ?? -1
  }

  remove(key) {
    delete this.map[key]
  }
}

// -----------------------------
// TESTS

let obj = new MyHashMap()
obj.put(1, 1)
obj.put(2, 2)
obj.remove(1)
console.log(obj.get(1)) // -1
console.log(obj.get(2)) // 2
