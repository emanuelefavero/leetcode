// * Make Two Arrays Equal by Reversing Subarrays

// You are given two integer arrays of equal length target and arr. In one step, you can select any non-empty subarray of arr and reverse it. You are allowed to make any number of steps.

// Return true if you can make arr equal to target or false otherwise.

/**
 * @param {number[]} target
 * @param {number} arr
 * @returns {boolean}
 */

// O(n) time | O(n) space
function canBeEqual(target, arr) {
  let map = new Map()

  for (let num of target) {
    map.set(num, (map.get(num) || 0) + 1)
  }

  for (let num of arr) {
    if (!map.has(num)) return false
    map.set(num, map.get(num) - 1)
  }

  // If all values in the map are 0, it means that the arrays have the same numbers with same frequency
  for (let [_, value] of map) {
    if (value !== 0) return false
  }

  return true
}

// -------------------------
// TESTS

console.log(canBeEqual([1, 2, 3, 4], [2, 4, 1, 3])) // true
/*
Explanation: You can follow the next steps to convert arr to target:
1- Reverse subarray [2,4,1], arr becomes [1,4,2,3]
2- Reverse subarray [4,2], arr becomes [1,2,4,3]
3- Reverse subarray [4,3], arr becomes [1,2,3,4]
There are multiple ways to convert arr to target, this is not the only way to do so.
*/
console.log(canBeEqual([3, 7, 9], [3, 7, 11])) // false
console.log(canBeEqual([1, 2, 2, 3], [1, 1, 2, 3])) // false
