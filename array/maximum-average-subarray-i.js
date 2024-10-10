// * Maximum Average Subarray I

// You are given an integer array nums consisting of n elements, and an integer k.

// Find a contiguous subarray whose length is equal to k that has the maximum average value and return this value. Any answer with a calculation error less than 10-5 will be accepted.

// TIP: This is a sliding window problem

function findMaxAverage(nums, k) {
  let sum = 0
  let max = -Infinity

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i]

    // if the current subarray reaches the desired length
    if (i >= k - 1) {
      max = Math.max(max, sum)
      sum -= nums[i - k + 1] // subtract first element of current subarray
    }
  }

  return max / k
}

// -------------------------
// TESTS

console.log(findMaxAverage([1, 12, -5, -6, 50, 3], 4)) // 12.75
// Explanation: Maximum average is (12 - 5 - 6 + 50) / 4 = 51 / 4 = 12.75
console.log(findMaxAverage([5], 1)) // 5
