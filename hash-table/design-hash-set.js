// * Design a HashSet without using any built-in hash table libraries

/**
 * @typedef {Object} MyHashSet
 */

class MyHashSet {
  constructor() {
    this.set = {}
  }

  /**
   * Inserts the value key into the HashSet
   *
   * @param {*} key
   * @returns {void}
   */

  add(key) {
    this.set[key] = true
  }

  /**
   * Removes the value key in the HashSet. If key does not exist in the HashSet, do nothing
   *
   * @param {*} key
   * @returns {void}
   */

  remove(key) {
    delete this.set[key]
  }

  /**
   * Returns whether the value key exists in the HashSet or not
   *
   * @param {*} key
   * @returns {boolean}
   */

  contains(key) {
    return this.set[key] === true
  }
}

// -----------------------------
// TESTS

let obj = new MyHashSet()
obj.add(1)
obj.add(2)
obj.remove(1)

console.log(obj.contains(1)) // false
console.log(obj.contains(2)) // true
