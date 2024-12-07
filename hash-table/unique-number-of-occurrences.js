// * Unique Number of Occurrences

// Given an array of integers arr, return true if the number of occurrences of each value in the array is unique or false otherwise.

function uniqueOccurrences(arr) {
  let map = new Map()
  let set = new Set()

  for (let num of arr) {
    map.set(num, (map.get(num) || 0) + 1)
  }

  for (let value of map.values()) {
    if (set.has(value)) return false
    set.add(value)
  }

  return true
}

// -----------------------------
// TESTS

console.log(uniqueOccurrences([1, 2, 2, 1, 1, 3])) // true
// Explanation: The value 1 has 3 occurrences, 2 has 2 and 3 has 1. No two values have the same number of occurrences.

console.log(uniqueOccurrences([1, 2])) // false
