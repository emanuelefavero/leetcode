// * Search in Rotated Sorted Array

/*
There is an integer array nums sorted in ascending order (with distinct values).

Prior to being passed to your function, nums is possibly rotated at an unknown pivot index k (1 <= k < nums.length) such that the resulting array is [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]] (0-indexed). For example, [0,1,2,4,5,6,7] might be rotated at pivot index 3 and become [4,5,6,7,0,1,2].

Given the array nums after the possible rotation and an integer target, return the index of target if it is in nums, or -1 if it is not in nums.

You must write an algorithm with O(log n) runtime complexity
*/

/**
 * search - Searches for a target in a rotated sorted array
 *
 * @param {number[]} nums
 * @param {number} target
 * @returns {number}
 */

// TIP: We will use binary search to solve this problem efficiently

function search(nums, target) {
  let left = 0
  let right = nums.length - 1

  while (left <= right) {
    const middle = Math.floor((left + right) / 2)

    if (nums[middle] === target) return middle

    // TIP: When dividing the rotated array into two halves, one must be sorted

    // Check if the left side is sorted
    if (nums[left] <= nums[middle]) {
      // If the target is in the left side, search there
      if (target >= nums[left] && target <= nums[middle]) right = middle - 1
      else left = middle + 1 // Otherwise, search the right side
    }

    // Otherwise, the right side is sorted
    else {
      // If the target is in the right side, search there
      if (target >= nums[middle] && target <= nums[right]) left = middle + 1
      else right = middle - 1 // Otherwise, search the left side
    }
  }

  return -1
}

// -------------------------
// TESTS

console.log(search([4, 5, 6, 7, 0, 1, 2], 6)) // 2 (six is at index 2)
