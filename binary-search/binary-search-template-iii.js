/**
 * * Binary Search Template III
 *
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

// O(log n) time | O(1) space
function binarySearch(nums, target) {
  if (!nums.length) return -1

  let left = 0
  let right = nums.length - 1

  while (left + 1 < right) {
    const middle = Math.floor((left + right) / 2)

    if (nums[middle] === target) return middle
    else if (nums[middle] < target) left = middle
    else right = middle
  }

  // Post-processing
  // End condition: left + 1 = right
  if (nums[left] === target) return left
  if (nums[right] === target) return right
  return -1
}

// ------------------------
// TESTS

console.log(binarySearch([1, 2, 3, 4, 5], 3)) // 2, index of 3
console.log(binarySearch([1, 2, 3, 4, 5], 6)) // -1, not found
