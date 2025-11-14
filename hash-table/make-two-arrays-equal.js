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
  const map = new Map()

  for (const num of target) {
    map.set(num, (map.get(num) || 0) + 1)
  }

  for (const num of arr) {
    if (!map.has(num)) return false
    map.set(num, map.get(num) - 1)
  }

  // If all values in the map are 0, it means that the arrays have the same numbers with same frequency
  for (const [_, value] of map) {
    if (value !== 0) return false
  }

  return true
}

// -------------------------
// SOLUTION 2

// TIP: One line solution using sort and converting the arrays to strings

function canBeEqual2(target, arr) {
  return (
    target.sort((a, b) => a - b).join('') === arr.sort((a, b) => a - b).join('')
  )
}

// -------------------------
// SOLUTION 3

// TIP: This solution uses the provided constraints that the arrays have the same length and the numbers are between 1 and 1000
// TIP: We increase the count of the target numbers and decrease the count of the arr numbers as we iterate through the arrays to check if they have the same numbers with the same frequency

function canBeEqual3(target, arr) {
  const count = new Int32Array(1001)
  let uniqueCount = 0

  for (let i = 0; i < target.length; i++) {
    if (count[target[i]]++ === 0) uniqueCount++
    if (count[arr[i]]-- === 1) uniqueCount--
  }

  return uniqueCount === 0
}

// -------------------------
// TESTS

// 1
console.log(canBeEqual([1, 2, 3, 4], [2, 4, 1, 3])) // true
/*
Explanation: You can follow the next steps to convert arr to target:
1- Reverse subarray [2,4,1], arr becomes [1,4,2,3]
2- Reverse subarray [4,2], arr becomes [1,2,4,3]
3- Reverse subarray [4,3], arr becomes [1,2,3,4]
There are multiple ways to convert arr to target, this is not the only way to do so.
*/
console.log(canBeEqual([1, 2, 2, 3], [1, 1, 2, 3])) // false

// 2
console.log(canBeEqual2([1, 2, 3, 4], [2, 4, 1, 3])) // true
console.log(canBeEqual2([1, 2, 2, 3], [1, 1, 2, 3])) // false

// 3
console.log(canBeEqual3([1, 2, 3, 4], [2, 4, 1, 3])) // true
console.log(canBeEqual3([1, 2, 2, 3], [1, 1, 2, 3])) // false
