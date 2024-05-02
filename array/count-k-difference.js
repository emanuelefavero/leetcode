// * Count Number of Pairs With Absolute Difference K

/*
Given an integer array nums and an integer k, return the number of pairs (i, j) where i < j such that |nums[i] - nums[j]| == k.

The value of |x| is defined as:

x if x >= 0.
-x if x < 0.
*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @returns {number}
 */

// O(n^2) time | O(1) space
function countKDifference(nums, k) {
  let count = 0

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (Math.abs(nums[i] - nums[j]) === k) {
        count++
      }
    }
  }

  return count
}

// -----------------------------
// TESTS

console.log(countKDifference([1, 2, 2, 1], 1)) // 4
