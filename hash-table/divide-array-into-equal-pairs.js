// * Divide Array Into Equal Pairs

/*
You are given an integer array nums consisting of 2 * n integers.

You need to divide nums into n pairs such that:

- Each element belongs to exactly one pair.
- The elements present in a pair are equal.

Return true if nums can be divided into n pairs, otherwise return false.
*/

/**
 * @param {number} nums
 * @returns {boolean}
 */

// O(n) time | O(n) space
function divideArray(nums) {
  const map = new Map()

  // Populate the map with counts of each number
  for (const num of nums) {
    map.set(num, (map.get(num) || 0) + 1)
  }

  // Check if any num occurrence is odd, if so, return false
  for (const [_, value] of map) {
    if (value % 2 !== 0) return false
  }

  // Get the sum of num occurrences
  let sum = 0
  for (const [_, value] of map) {
    sum += value
  }

  // Check if sum can be divided by n equally
  const n = nums.length / 2
  return sum % n === 0
}
// -------------------------
// SOLUTION 2

// TIP: If the frequency of all numbers is even, we can form pairs no matter the arrangement of the numbers, so we can simplify the solution.

function divideArray2(nums) {
  const map = new Map()

  // Populate the map with counts of each number
  for (const num of nums) {
    map.set(num, (map.get(num) || 0) + 1)
  }

  // Check if any num occurrence is odd, if so, return false
  for (const [_, value] of map) {
    if (value % 2 !== 0) return false
  }

  // Get the sum of num occurrences
  let sum = 0
  for (const [_, value] of map) {
    sum += value
  }

  return true
}

// -------------------------
// TESTS

// 1
console.log(divideArray([3, 2, 3, 2, 2, 2])) // true
/* Explanation:
There are 6 elements in nums, so they should be divided into 6 / 2 = 3 pairs.
If nums is divided into the pairs (2, 2), (3, 3), and (2, 2), it will satisfy all the conditions.
*/
console.log(divideArray([1, 2, 3, 4])) // false

// 2
console.log(divideArray2([3, 2, 3, 2, 2, 2])) // true
console.log(divideArray2([1, 2, 3, 4])) // false
