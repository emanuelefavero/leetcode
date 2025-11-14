/**
 * * Binary Search
 *
 * Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1
 *
 * @param {number[]} nums
 * @param {number} target
 * @returns {number}
 */

// O(log n) time | O(1) space
function search(nums, target) {
  let start = 0
  let end = nums.length - 1

  while (start <= end) {
    const middle = Math.floor((start + end) / 2)

    if (nums[middle] === target) return middle

    if (nums[middle] < target) start = middle + 1
    else if (nums[middle] > target) end = middle - 1
  }

  return -1
}

// ------------------------
// TESTS

console.log(search([-1, 0, 3, 5, 9, 12], 9)) // 4, the index of 9 is 4
console.log(search([-1, 0, 3, 5, 9, 12], 2)) // -1, 2 does not exist in nums
