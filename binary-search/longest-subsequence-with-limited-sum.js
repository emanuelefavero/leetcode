// * Longest Subsequence With Limited Sum

/*
You are given an integer array nums of length n, and an integer array queries of length m.

Return an array answer of length m where answer[i] is the maximum size of a subsequence that you can take from nums such that the sum of its elements is less than or equal to queries[i].

A subsequence is an array that can be derived from another array by deleting some or no elements without changing the order of the remaining elements.
*/

/**
 * @param {number[]} nums
 * @param {number[]} queries
 * @returns {number[]}
 */

// TIP: This is not a binary search solution but is the most simple and common

// O(n * m) time | O(1) space
function answerQueries(nums, queries) {
  nums.sort((a, b) => a - b)

  const result = []

  for (const query of queries) {
    let count = 0
    let sum = 0

    for (let i = 0; i < nums.length; i++) {
      if (sum + nums[i] <= query) {
        sum += nums[i]
        count++
      }
    }

    result.push(count)
  }

  return result
}

// ---------------------
// TESTS

console.log(answerQueries([4, 5, 2, 1], [3, 10, 21])) // [2, 3, 4]
