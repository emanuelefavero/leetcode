// * Missing Number

// Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array

/**
 * @param {number[]} nums
 * @returns {number}
 */

// TIP: This solution is not binary search, but it's a good solution to solve the problem

// O(n) time | O(n) space
function missingNumber(nums) {
  let set = new Set([...nums])

  for (let i = 0; i < nums.length + 1; i++) {
    if (!set.has(i)) return i
  }
}

// ---------------------
// TESTS

console.log(missingNumber([3, 0, 1])) // 2
// Explanation: n = 3 since there are 3 numbers, so all numbers are in the range [0,3]. 2 is the missing number in the range since it does not appear in nums

console.log(missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1])) // 8
