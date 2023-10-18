// Design a HashSet without using any built-in hash table libraries.

/* Implement MyHashSet class:
  - void add(key) Inserts the value key into the HashSet.
  - bool contains(key) Returns whether the value key exists in the HashSet or not.
  - void remove(key) Removes the value key in the HashSet. If key does not exist in the HashSet, do nothing.
*/

class MyHashSet {
  constructor() {}

  add(key) {}

  remove(key) {}

  contains(key) {}
}

// -----------------------------
// TESTS

let obj = new MyHashSet()
obj.add(1)
obj.add(2)
obj.remove(1)

console.log(obj.contains(1)) // false
console.log(obj.contains(2)) // true
