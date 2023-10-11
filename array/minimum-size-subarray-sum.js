/**
 * * Given an array of positive integers nums and a positive integer target, return the minimal length of a subarray whose sum is greater than or equal to target. If there is no such subarray, return 0 instead
 *
 * @param {number} target
 * @param {number[]} nums
 * @returns {number}
 */

// O(n) time - O(1) space
function minSubArrayLen(target, nums) {
  let left = 0
  let right = 0
  let sum = 0
  let minLen = Infinity

  while (right < nums.length) {
    sum += nums[right]

    // if the sum is greater than or equal to the target, move the left pointer to the right and update the minLen with the difference between the right and left pointers. Also subtract the value of the left pointer from the sum
    while (sum >= target) {
      minLen = Math.min(minLen, right - left + 1)
      sum -= nums[left]
      left++
    }

    right++
  }

  return minLen === Infinity ? 0 : minLen
}

// -------------------------
// TESTS

console.log(minSubArrayLen(7, [2, 3, 1, 2, 4, 3])) // 2

// Explanation: The subarray [4,3] has the minimal length under the problem constraint.
