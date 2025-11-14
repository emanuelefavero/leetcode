// * Map Sum Pairs

/*
Design a map that allows you to do the following:

Maps a string key to a given value.
Returns the sum of the values that have a key with a prefix equal to a given string.
Implement the MapSum class:

MapSum() Initializes the MapSum object.
void insert(String key, int val) Inserts the key-val pair into the map. If the key already existed, the original key-value pair will be overridden to the new one.
int sum(string prefix) Returns the sum of all the pairs' value whose key starts with the prefix.
*/

// TIP: This problem can also be solved with a Trie but it is much simpler to use a Map

class MapSum {
  constructor() {
    this.map = {}
  }

  /**
   * @param {string} key
   * @param {number} val
   * @return {void}
   */

  // O(1)
  insert(key, val) {
    this.map[key] = val
  }

  /**
   * @param {string} prefix
   * @return {number}
   */

  // O(n)
  sum(prefix) {
    let sum = 0

    for (const key in this.map) {
      if (key.startsWith(prefix)) {
        sum += this.map[key] // add value to sum
      }
    }

    return sum
  }
}

// -----------------------------
// TESTS

const mapSum = new MapSum()
mapSum.insert('apple', 3)
console.log(mapSum.sum('ap')) // 3
mapSum.insert('app', 2)
console.log(mapSum.sum('ap')) // 5
