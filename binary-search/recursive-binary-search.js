// * Recursive Binary Search

// TIP: This is an implementation of the binary search algorithm using recursion

/**
 * @param {number[]} nums
 * @param {number} target
 * @param {number} left
 * @param {number} right
 * @returns {number}
 */

// O(log n) time | O(log n) space
function binarySearch(nums, target, left = 0, right = nums.length - 1) {
  if (left > right) return -1 // BASE CASE

  let middle = Math.floor((left + right) / 2)

  if (nums[middle] === target) return middle
  else if (nums[middle] < target) {
    return binarySearch(nums, target, middle + 1, right)
  } else {
    return binarySearch(nums, target, left, middle - 1)
  }
}

// ------------------------
// TESTS

console.log(binarySearch([1, 2, 3, 4, 5], 3)) // 2, index of 3
console.log(binarySearch([1, 2, 3, 4, 5], 6)) // -1, not found
