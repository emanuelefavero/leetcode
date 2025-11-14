// * Design a HashMap without using any built-in hash table libraries

class MyHashMap {
  map = {}

  /**
   * Inserts the value key into the HashMap. If the key already exists, update the corresponding value
   *
   * @param {int} key
   * @param {int} value
   * @returns {void}
   */

  put = (key, value) => (this.map[key] = value)

  /**
   * Returns the value to which the specified key is mapped, or -1 if this map contains no mapping for the key
   *
   * @param {int} key
   * @returns {int}
   */

  get = (key) => this.map[key] ?? -1

  /**
   * Removes the key and its corresponding value if the map contains the mapping for the key
   *
   * @param {int} key
   * @returns {void}
   */

  remove = (key) => delete this.map[key]
}

// -----------------------------
// TESTS

const obj = new MyHashMap()
obj.put(1, 1)
obj.put(2, 2)
obj.remove(1)
console.log(obj.get(1)) // -1
console.log(obj.get(2)) // 2
