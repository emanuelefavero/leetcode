// * Count Equal and Divisible Pairs in an Array

// Given a 0-indexed integer array nums of length n and an integer k, return the number of pairs (i, j) where 0 <= i < j < n, such that nums[i] == nums[j] and (i * j) is divisible by k.

function countPairs(nums, k) {
  let count = 0

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] === nums[j] && (i * j) % k === 0) {
        count++
      }
    }
  }

  return count
}

// -----------------------------
// TESTS

console.log(countPairs([3, 1, 2, 2, 2, 1, 3], 2)) // 4
console.log(
  countPairs([5, 5, 9, 2, 5, 5, 9, 2, 2, 5, 5, 6, 2, 2, 5, 2, 5, 4, 3], 7)
) // 18
