/**
 * Given an array nums, return the running sum of its elements.
 * Explanation: Running sum is obtained as follows:
 * input: [1, 2, 3, 4]
 * running sum = [1, 1+2, 1+2+3, 1+2+3+4]
 * output: [1, 3, 6, 10]
 *
 * @param {number[]} nums
 * @returns {number[]}
 */

// O(n) time, O(1) space
function runningSum(nums) {
  let sum = 0

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i]
    nums[i] = sum
  }

  return nums
}

console.log(runningSum([1, 2, 3, 4])) // [1, 3, 6, 10]
console.log(runningSum([1, 1, 1, 1, 1])) // [1, 2, 3, 4, 5]
console.log(runningSum([3, 1, 2, 10, 1])) // [3, 4, 6, 16, 17]

// --------------------------------------------------------------------------
// ALTERNATE SOLUTIONS

// O(n) time, O(n) space
function runningSum2(nums) {
  let result = []
  let sum = 0

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i]
    result.push(sum)
  }

  return result
}
