// *  Subarrays Distinct Element Sum of Squares I

/*
You are given a 0-indexed integer array nums.

The distinct count of a subarray of nums is defined as:

Let nums[i..j] be a subarray of nums consisting of all the indices from i to j such that 0 <= i <= j < nums.length. Then the number of distinct values in nums[i..j] is called the distinct count of nums[i..j].
Return the sum of the squares of distinct counts of all subarrays of nums.

A subarray is a contiguous non-empty sequence of elements within an array.
*/

/**
 * @param {number[]} nums
 * @returns {number}
 */

// O(n^2) time | O(n) space
function sumCounts(nums) {
  let sum = 0

  for (let i = 0; i < nums.length; i++) {
    const set = new Set([nums[i]])
    for (let j = i; j < nums.length; j++) {
      set.add(nums[j])
      sum += set.size ** 2 // ** is the exponentiation operator
    }
  }

  return sum
}

// -------------------------
// TESTS

console.log(sumCounts([1, 2, 1])) // 15
/*
Explanation: Six possible subarrays are:
[1]: 1 distinct value
[2]: 1 distinct value
[1]: 1 distinct value
[1,2]: 2 distinct values
[2,1]: 2 distinct values
[1,2,1]: 2 distinct values
The sum of the squares of the distinct counts in all subarrays is equal to 12 + 12 + 12 + 22 + 22 + 22 = 15.
*/
