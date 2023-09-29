/**
 * * Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order
 * @param {number[]} nums
 * @return {number[]}
 */

// O(n log n) time | O(n) space
function sortedSquares3(nums) {
  let result = nums.map((n) => n * n) // square each number

  return result.sort((a, b) => a - b) // sort the array
}

// -------------------------------
// SOLUTION 2 - in-place

// O(n log n) time | O(1) space
function sortedSquares2(nums) {
  for (let i = 0; i < nums.length; i++) {
    nums[i] = nums[i] * nums[i]
  }

  return nums.sort((a, b) => a - b)
}

// -------------------------------
// SOLUTION 3 - not in-place

// O(n log n) time | O(n) space
function sortedSquares(nums) {
  let squares = []

  for (let i = 0; i < nums.length; i++) {
    squares.push(nums[i] * nums[i])
  }

  return squares.sort((a, b) => a - b)
}

// -------------------------------
// TESTS

console.log(sortedSquares([-4, -1, 0, 3, 10])) // [0,1,9,16,100]
console.log(sortedSquares2([-4, -1, 0, 3, 10])) // [0,1,9,16,100]
console.log(sortedSquares3([-4, -1, 0, 3, 10])) // [0,1,9,16,100]
