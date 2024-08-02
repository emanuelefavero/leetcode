// * House Robber

/*
You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed, the only constraint stopping you from robbing each of them is that adjacent houses have security systems connected and it will automatically contact the police if two adjacent houses were broken into on the same night.

Given an integer array nums representing the amount of money of each house, return the maximum amount of money you can rob tonight without alerting the police.
*/

/**
 * @param {number[]} nums
 * @returns {number}
 */

// TIP: We can use dynamic programming to solve this problem

// O(n) time | O(n) space
function rob(nums) {
  let n = nums.length
  if (n === 1) return nums[0]

  let dp = new Array(n).fill(0) // Dynamic programming array
  dp[0] = nums[0]
  dp[1] = Math.max(nums[0], nums[1])

  for (let i = 2; i < n; i++) {
    dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i])
  }

  return dp[n - 1]
}

// ------------------
// SOLUTION 2

// TIP: We don't need to store all the values in the dp array, we can just store the last two values

// O(n) time | O(1) space
function rob2(nums) {
  let first = 0
  let second = 0

  for (let i = 0; i < nums.length; i++) {
    let current = Math.max(first + nums[i], second)
    first = second
    second = current
  }

  // second will have the maximum amount of money at the end
  return second
}

// ------------------
// TESTS

// 1
console.log(rob([1, 2, 3, 1])) // 4
// Explanation: Rob house 1 (money = 1) and then rob house 3 (money = 3). Total amount you can rob = 1 + 3 = 4.
console.log(rob([2, 7, 9, 3, 1])) // 12
console.log(rob([2, 1, 1, 2])) // 4

// 2
console.log(rob2([1, 2, 3, 1])) // 4
console.log(rob2([2, 7, 9, 3, 1])) // 12
console.log(rob2([2, 1, 1, 2])) // 4
