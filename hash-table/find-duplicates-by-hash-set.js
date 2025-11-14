/**
 * * Given an array of integers, find if the array contains any duplicates
 *
 * @param {number[]} keys
 * @returns {boolean}
 */

// O(n) time | O(n) space
function findDuplicates(keys) {
  const set = new Set()

  for (const key of keys) {
    if (set.has(key)) return true
    else set.add(key)
  }

  return false
}

// -----------------------------
// TESTS

console.log(findDuplicates([1, 2, 3, 1])) // true
console.log(findDuplicates([1, 2, 3, 4])) // false
