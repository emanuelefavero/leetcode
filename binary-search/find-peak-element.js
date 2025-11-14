// * Find Peak Element

/*
A peak element is an element that is strictly greater than its neighbors.

Given a 0-indexed integer array nums, find a peak element, and return its index. If the array contains multiple peaks, return the index to any of the peaks.

You may imagine that nums[-1] = nums[n] = -∞. In other words, an element is always considered to be strictly greater than a neighbor that is outside the array.

You must write an algorithm that runs in O(log n) time.
*/

/**
 * @param {number[]} nums
 * @returns {number} index of peak element
 */

// O(log n) time | O(1) space
function findPeakElement(nums) {
  let left = 0
  let right = nums.length - 1

  while (left < right) {
    const middle = Math.floor((left + right) / 2)

    if (nums[middle] < nums[middle + 1]) left = middle + 1
    else if (nums[middle] > nums[middle + 1]) right = middle
  }

  return left // at this point left is the peak element
}

// ------------------------
// SOLUTION 2 - linear search

// O(n) time | O(1) space
function findPeakElement2(nums) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > nums[i + 1]) return i
  }

  return nums.length - 1 // if we get here, the last element is the peak
}

// ------------------------
// TESTS

console.log(findPeakElement([1, 2, 3, 1])) // 2
console.log(findPeakElement([1, 2, 1, 3, 5, 6, 4])) // 5

console.log(findPeakElement2([1, 2, 3, 1])) // 2
console.log(findPeakElement2([1, 2, 1, 3, 5, 6, 4])) // 1, the index of 2
