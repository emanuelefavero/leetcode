// * Disjoint Set

// Design a disjoint set data structure that supports the following operations:
// find
// union

// TIP: A Disjoint Set is a data structure that keeps track of a set of elements partitioned into a number of disjoint (non-overlapping) subsets.
// TIP: find return the root of the set that the element belongs to
// TIP: union merges two sets together

class DisjointSet {
  constructor() {
    this.parent = {}

    // TIP: To improve the efficiency of the data structure, we can keep track of the size of each set and always merge the smaller set into the larger set
    // this.size = {}
  }

  /**
   * @param {number} x
   * @returns {void}
   */

  // O(1) time | O(1) space
  makeSet(x) {
    this.parent[x] = x
  }

  /**
   * @param {number} x
   * @returns {number}
   */

  // O(n) time | O(1) space
  find(x) {
    if (this.parent[x] === x) return x

    return this.find(this.parent[x])
  }

  /**
   * @param {number} x
   * @param {number} y
   * @returns {void}
   */

  // O(n) time | O(1) space
  union(x, y) {
    let xRoot = this.find(x)
    let yRoot = this.find(y)

    this.parent[xRoot] = yRoot

    // TIP: To improve the efficiency of the data structure, we can refactor this function to keep track of the size of each set and always merge the smaller set into the larger set
  }

  /**
   * check if x and y are in the same set
   *
   * @param {number} x
   * @param {number} y
   * @returns {boolean}
   */

  // O(n) time | O(1) space
  connected(x, y) {
    return this.find(x) === this.find(y)
  }
}

// -----------------------------
// TESTS

let disjointSet = new DisjointSet()

disjointSet.makeSet(1)
disjointSet.makeSet(2)
disjointSet.makeSet(3)

disjointSet.union(1, 2)
disjointSet.union(2, 3)

console.log(disjointSet.find(1)) // 3
console.log(disjointSet.find(2)) // 3
console.log(disjointSet.find(3)) // 3

console.log(disjointSet.connected(1, 3)) // true

// Explanation: 1, 2, and 3 have the same root so they are all in the same set
