// * Unique Number of Occurrences

// Given an array of integers arr, return true if the number of occurrences of each value in the array is unique or false otherwise.

/**
 * @param {number[]} arr
 * @returns {boolean}
 */

// O(n) time | O(n) space
function uniqueOccurrences(arr) {
  let map = new Map()
  let set = new Set()

  for (let num of arr) {
    map.set(num, (map.get(num) || 0) + 1)
  }

  for (let [_, value] of map) {
    if (set.has(value)) return false
    set.add(value)
  }

  return true
}

// -----------------------------
// SOLUTION 2

// TIP: We could also check the size of the set

function uniqueOccurrences2(arr) {
  let map = new Map()

  for (let num of arr) {
    map.set(num, (map.get(num) || 0) + 1)
  }

  let set = new Set(map.values())

  return map.size === set.size
}

// -----------------------------
// TESTS

// 1
console.log(uniqueOccurrences([1, 2, 2, 1, 1, 3])) // true
// Explanation: The value 1 has 3 occurrences, 2 has 2 and 3 has 1. No two values have the same number of occurrences.

console.log(uniqueOccurrences([1, 2])) // false

// 2
console.log(uniqueOccurrences2([1, 2, 2, 1, 1, 3])) // true
console.log(uniqueOccurrences2([1, 2])) // false
