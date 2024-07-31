// * Maximum Subarray

// Given an integer array nums, find the subarray with the largest sum, and return its sum

/**
 * @param {number[]} nums
 * @returns {number}
 */

// TIP: Kadane's Algorithm

// O(n) time | O(1) space
function maxSubArray(nums) {
  let max = nums[0]
  let sum = nums[0]

  for (let i = 1; i < nums.length; i++) {
    if (sum < 0) sum = 0
    sum += nums[i]
    max = Math.max(max, sum)
  }

  return max
}

// ------------------
// TESTS

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])) // 6
// Explanation: The subarray [4,-1,2,1] has the largest sum 6.
console.log(maxSubArray([1])) // 1
console.log(maxSubArray([5, 4, -1, 7, 8])) // 23
