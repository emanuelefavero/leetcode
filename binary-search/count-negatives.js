// * Count Negative Numbers in a Sorted Matrix

// Given a m x n matrix grid which is sorted in non-increasing order both row-wise and column-wise, return the number of negative numbers in grid.

/**
 * @param {number[][]} grid
 * @returns {number}
 */

// O(n^2) time | O(1) space
function countNegatives(grid) {
  let count = 0

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] < 0) count++
    }
  }

  return count
}

// ------------------------
// SOLUTION 2

// TIP: This is a binary search solution

// O(n log n) time | O(1) space
function countNegatives2(grid) {
  let count = 0

  for (let i = 0; i < grid.length; i++) {
    let left = 0
    let right = grid[i].length - 1

    while (left <= right) {
      let middle = Math.floor((left + right) / 2)

      if (grid[i][middle] < 0) {
        right = middle - 1
      } else {
        left = middle + 1
      }
    }

    // Count the number of negative numbers by subtracting the left index from the length of the row
    count += grid[i].length - left
  }

  return count
}

// ------------------------
// TESTS

// 1
console.log(
  countNegatives([
    [4, 3, 2, -1],
    [3, 2, 1, -1],
    [1, 1, -1, -2],
    [-1, -1, -2, -3],
  ])
) // 8
// Explanation: There are 8 negatives number in the matrix.

// 2
console.log(
  countNegatives2([
    [4, 3, 2, -1],
    [3, 2, 1, -1],
    [1, 1, -1, -2],
    [-1, -1, -2, -3],
  ])
) // 8
