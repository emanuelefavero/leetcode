/**
 * * Given an array of integers arr, return true if there are two distinct indices i and j in the array such that arr[i] == 2 * arr[j], or arr[j] == 2 * arr[i], or both
 *
 * @param {number[]} arr
 * @returns {boolean}
 */

// O(n) time | O(n) space
function checkIfExist(arr) {
  const set = new Set()

  for (let i = 0; i < arr.length; i++) {
    if (set.has(arr[i] * 2) || set.has(arr[i] / 2)) return true

    set.add(arr[i])
  }

  return false
}

// ---------------------
// TESTS

console.log(checkIfExist([10, 2, 5, 3])) // true
console.log(checkIfExist([2, 5, 3, 10])) // true
console.log(checkIfExist([3, 1, 7, 11])) // false
