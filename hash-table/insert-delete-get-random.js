/*
* Implement the RandomizedSet class:

RandomizedSet() Initializes the RandomizedSet object.
bool insert(int val) Inserts an item val into the set if not present. Returns true if the item was not present, false otherwise.
bool remove(int val) Removes an item val from the set if present. Returns true if the item was present, false otherwise.
int getRandom() Returns a random element from the current set of elements (it's guaranteed that at least one element exists when this method is called). Each element must have the same probability of being returned.
You must implement the functions of the class such that each function works in average O(1) time complexity.
*/

class RandomizedSet {
  constructor() {
    this.set = {}
  }

  /**
   * * Inserts an item val into the set if not present. Returns true if the item was not present, false otherwise
   * @param {number} val
   * @returns {boolean}
   */

  insert(val) {
    if (!this.set[val]) {
      this.set[val] = true
      return true
    } else return false
  }

  /**
   * * Removes an item val from the set if present. Returns true if the item was present, false otherwise
   * @param {number} val
   * @returns {boolean}
   */

  remove(val) {
    if (!this.set[val]) {
      return false
    } else {
      delete this.set[val]
      return true
    }
  }

  /**
   * * Returns a random element from the current set of elements (it's guaranteed that at least one element exists when this method is called). Each element must have the same probability of being returned
   * @returns {number}
   */

  getRandom() {
    let keys = Object.keys(this.set)
    let randomIndex = Math.floor(Math.random() * keys.length)
    return keys[randomIndex]
  }
}

// --------------------------
// TESTS

let obj = new RandomizedSet()
obj.insert(1) // true, 1 was inserted successfully
obj.remove(2) // false, 2 is not in the set
obj.insert(2) // true
console.log(obj.getRandom()) // 1 or 2
obj.remove(1) // true
obj.insert(2) // false
console.log(obj.getRandom()) // 2

console.log(obj)
