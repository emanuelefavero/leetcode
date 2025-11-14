/**
 * * You are given an integer array nums where the largest integer is unique.
 *
 * Determine whether the largest element in the array is at least twice as much as every other number in the array. If it is, return the index of the largest element, or return -1 otherwise
 *
 * @param {number[]} nums
 * @returns {number}
 */

// TIP: This solution is slow and not very efficient memory-wise but it is short and easy to understand

// O(n log n) time | O(n) space
function dominantIndex(nums) {
  // sort the array in descending order
  const sorted = [...nums].sort((a, b) => b - a)

  // if the largest number is at least twice as much as the second largest number, return the index of the largest number
  if (sorted[0] >= sorted[1] * 2) return nums.indexOf(sorted[0])
  return -1
}

// -------------------------
// TESTS

console.log(dominantIndex([3, 6, 1, 0])) // 1
console.log(dominantIndex([1, 2, 3, 4])) // -1
console.log(dominantIndex([1, 0])) // 0
