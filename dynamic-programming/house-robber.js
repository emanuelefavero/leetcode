// * House Robber

/*
You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed, the only constraint stopping you from robbing each of them is that adjacent houses have security systems connected and it will automatically contact the police if two adjacent houses were broken into on the same night.

Given an integer array nums representing the amount of money of each house, return the maximum amount of money you can rob tonight without alerting the police.
*/

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
// TESTS

console.log(rob([1, 2, 3, 1])) // 4
// Explanation: Rob house 1 (money = 1) and then rob house 3 (money = 3). Total amount you can rob = 1 + 3 = 4.
console.log(rob([2, 7, 9, 3, 1])) // 12
