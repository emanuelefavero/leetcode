// Find All Numbers Disappeared in an Array

/**
 * * Given an array nums of n integers where nums[i] is in the range [1, n], return an array of all the integers in the range [1, n] that do not appear in nums
 *
 * @param {number[]} nums
 * @returns {number[]}
 */

// -------------------------
// SOLUTION 1

// TIP: This solution is easy to understand and is really efficient memory-wise but is a bit slow time-wise

function findDisappearedNumbers(nums) {
  let result = []

  // Check if each number from 1 to nums.length is in the array
  for (let i = 1; i <= nums.length; i++) {
    if (!nums.includes(i)) result.push(i)
  }

  return result
}

// -------------------------
// TESTS

console.log(findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1])) // [5, 6]
console.log(findDisappearedNumbers([1, 1])) // [2]
