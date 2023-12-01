// * Search a 2D Matrix II

// Write an efficient algorithm that searches for a value target in an m x n integer matrix `matrix`. This matrix has the following properties:

// Integers in each row are sorted in ascending from left to right.
// Integers in each column are sorted in ascending from top to bottom.

// TIP: This solution uses a binary search approach

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @returns {boolean}
 */

// O(n + m) time - O(1) space
function searchMatrix(matrix, target) {
  let row = 0
  let column = matrix[0].length - 1

  while (row < matrix.length && column >= 0) {
    if (matrix[row][column] === target) return true

    if (matrix[row][column] < target) {
      row++
    } else {
      column--
    }
  }

  return false
}

// -----------------------------
// TESTS

console.log(
  searchMatrix(
    [
      [1, 4, 7, 11, 15],
      [2, 5, 8, 12, 19],
      [3, 6, 9, 16, 22],
      [10, 13, 14, 17, 24],
      [18, 21, 23, 26, 30],
    ],
    5
  )
) // true

console.log(
  searchMatrix(
    [
      [1, 4, 7, 11, 15],
      [2, 5, 8, 12, 19],
      [3, 6, 9, 16, 22],
      [10, 13, 14, 17, 24],
      [18, 21, 23, 26, 30],
    ],
    20
  )
) // false
