/**
 * * Count Pairs Whose Sum is Less than Target
 *
 * Given a 0-indexed integer array nums of length n and an integer target, return the number of pairs (i, j) where 0 <= i < j < n and nums[i] + nums[j] < target.
 *
 * @param {number[]} nums
 * @param {number} target
 * @returns {number}
 */

// TIP: This solution does not use sorting, but is easier to understand and implement

// O(n^2) time | O(1) space
function countPairs(nums, target) {
  let count = 0

  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] < target) {
        count++
      }
    }
  }
  return count
}

// -----------------------
// TESTS

console.log(countPairs([-1, 1, 2, 3, 1], 2))
console.log(countPairs([-6, 2, 5, -2, -7, -1, 3], -2))
