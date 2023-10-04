/**
 * * Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order
 *
 * @param {number[]} nums
 * @return {number[]}
 */

// O(n log n) time | O(n) space
function sortedSquares(nums) {
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
function sortedSquares3(nums) {
  let squares = []

  for (let i = 0; i < nums.length; i++) {
    squares.push(nums[i] * nums[i])
  }

  return squares.sort((a, b) => a - b)
}

// -------------------------------
// SOLUTION 4 - O(n) solution (two-pointer technique)

// TIP: This solution is faster than the previous three solutions but is harder to read

// O(n) time | O(n) space
function sortedSquares4(nums) {
  let squares = []
  let left = 0
  let right = nums.length - 1

  // iterate through the array from right to left
  for (let i = nums.length - 1; i >= 0; i--) {
    // compare the squares of the left and right pointers
    let leftSquare = nums[left] * nums[left]
    let rightSquare = nums[right] * nums[right]

    // add the larger square to the beginning of the array
    if (leftSquare > rightSquare) {
      squares[i] = leftSquare
      left++
    } else {
      squares[i] = rightSquare
      right--
    }
  }

  return squares
}

// -------------------------------
// TESTS

console.log(sortedSquares([-4, -1, 0, 3, 10])) // [0,1,9,16,100]
console.log(sortedSquares2([-4, -1, 0, 3, 10])) // [0,1,9,16,100]
console.log(sortedSquares3([-4, -1, 0, 3, 10])) // [0,1,9,16,100]
console.log(sortedSquares4([-4, -1, 0, 3, 10])) // [0,1,9,16,100]
