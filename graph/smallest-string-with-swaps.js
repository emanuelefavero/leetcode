// * Smallest String With Swaps

/*
You are given a string s, and an array of pairs of indices in the string pairs where pairs[i] = [a, b] indicates 2 indices(0-indexed) of the string.

You can swap the characters at any pair of indices in the given pairs any number of times.

Return the lexicographically smallest string that s can be changed to after using the swaps.
*/

// TIP: This solution simply swaps the characters at each pair of indices and then sorts the resulting strings and returns the first one

/**
 * @param {string} s
 * @param {number[][]} pairs
 * @returns {string}
 */

// O(n^2) time | O(n) space
function smallestStringWithSwaps(s, pairs) {
  class DisjointSet {
    constructor() {
      this.graph = [...Array(s.length)].map((_, i) => i) // initialize the graph with each index as its own parent
      this.size = s.length
    }

    find(id) {
      if (this.graph[id] === id) return id

      this.graph[id] = this.find(this.graph[id])

      return this.graph[id]
    }

    union(x, y) {
      const xRoot = this.find(x)
      const yRoot = this.find(y)

      if (xRoot === yRoot) return

      this.graph[xRoot] = yRoot
    }
  }

  const disjointSet = new DisjointSet()

  // loop through the pairs and union the indices
  for (const pair of pairs) {
    disjointSet.union(pair[0], pair[1])
  }

  // create a map of the indices and their corresponding characters
  const map = new Map()

  // loop through the string and add each character to the map
  for (let i = 0; i < s.length; i++) {
    const root = disjointSet.find(i)

    // if the map does not have the root index, add it to the map (with an empty array as the value)
    if (!map.has(root)) map.set(root, [])

    map.get(root).push(s[i]) // push the character to the array at the root index
  }

  // sort the characters at each index
  for (const [key, val] of map) {
    map.set(key, val.sort())
  }

  // loop through the string and add the characters from the map to the result
  let ans = ''
  for (let i = 0; i < s.length; i++) {
    const root = disjointSet.find(i)

    ans += map.get(root).shift()
  }

  return ans // return the result
}

// -----------------------------
// TESTS

console.log(
  smallestStringWithSwaps('dcab', [
    [0, 3],
    [1, 2],
  ])
) // bacd
// Explanation:
// Swap s[0] and s[3], s = "bcad"
// Swap s[1] and s[2], s = "bacd"

console.log(
  smallestStringWithSwaps('dcab', [
    [0, 3],
    [1, 2],
    [0, 2],
  ])
) // abcd
// Explanation:
// Swap s[0] and s[3], s = "bcad"
// Swap s[1] and s[2], s = "abcd"
// Swap s[0] and s[2], s = "acbd"
