// * Find Target Indices After Sorting Array

/*
You are given a 0-indexed integer array nums and a target element target.

A target index is an index i such that nums[i] == target.

Return a list of the target indices of nums after sorting nums in non-decreasing order. If there are no target indices, return an empty list. The returned list must be sorted in increasing order.
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @returns {number[]}
 */

// O(n) time | O(1) space
function targetIndices(nums, target) {
  nums.sort((a, b) => a - b)

  let result = []

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target) {
      result.push(i)
    }

    if (nums[i] > target) {
      break
    }
  }
  return result
}

// ------------------------
// SOLUTION 2

function targetIndices2(nums, target) {
  nums.sort((a, b) => a - b) // sort

  let result = []

  // Binary search
  let left = 0
  let right = nums.length - 1

  while (left <= right) {
    let middle = Math.floor((left + right) / 2)

    if (target > nums[middle]) left = middle + 1
    else right = middle - 1
  }

  // Find all target indices
  // TIP: At this point left is the first index of target
  for (let i = left; i < nums.length; i++) {
    if (nums[i] !== target) break
    result.push(i)
  }

  return result
}

// ------------------------
// TESTS

// 1
console.log(targetIndices([1, 2, 5, 2, 3], 2)) // [1, 2]
// Explanation: After sorting, nums is [1,2,2,3,5].
// The indices where nums[i] == 2 are 1 and 2.

// 2
console.log(targetIndices2([1, 2, 5, 2, 3], 2)) // [1, 2]
