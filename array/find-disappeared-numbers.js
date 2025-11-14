// Find All Numbers Disappeared in an Array

/**
 * * Given an array nums of n integers where nums[i] is in the range [1, n], return an array of all the integers in the range [1, n] that do not appear in nums
 *
 * @param {number[]} nums
 * @returns {number[]}
 */

// -------------------------
// SOLUTION 1

// TIP: This solution is easy to understand and is really efficient memory-wise but is slow time-wise

// O(n^2) time | O(n) space
function findDisappearedNumbers(nums) {
  const result = []

  // Check if each number from 1 to nums.length is in the array
  for (let i = 1; i <= nums.length; i++) {
    if (!nums.includes(i)) result.push(i)
  }

  return result
}

// -------------------------
// SOLUTION 2

// TIP: This solution is more efficient time-wise but is less efficient memory-wise

// O(n) time | O(n) space
function findDisappearedNumbers2(nums) {
  const set = new Set(nums) // remove duplicates
  const result = []

  // Check if each number from 1 to nums.length is in the set
  for (let i = 1; i <= nums.length; i++) {
    if (!set.has(i)) result.push(i)
  }

  return result
}

// -------------------------
// TESTS

console.log(findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1])) // [5, 6]
console.log(findDisappearedNumbers([1, 1])) // [2]

console.log(findDisappearedNumbers2([4, 3, 2, 7, 8, 2, 3, 1])) // [5, 6]
console.log(findDisappearedNumbers2([1, 1])) // [2]
