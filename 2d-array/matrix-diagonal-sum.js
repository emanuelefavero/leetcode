// * Matrix Diagonal Sum

// Given a square matrix mat, return the sum of the matrix diagonals.

// Only include the sum of all the elements on the primary diagonal and all the elements on the secondary diagonal that are not part of the primary diagonal.

/**
 * @param {number[][]} mat
 * @returns {number}
 */

// O(n) time | O(1) space
function diagonalSum(mat) {
  let sum = 0

  for (let i = 0; i < mat.length; i++) {
    sum += mat[i][i]
    if (i !== mat.length - 1 - i) {
      sum += mat[i][mat.length - 1 - i]
    }
  }

  return sum
}

// -------------------------
// TESTS

console.log(
  diagonalSum([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
) // 25
// Explanation: Diagonals sum: 1 + 5 + 9 + 3 + 7 = 25
// Notice that element mat[1][1] = 5 is counted only once.
