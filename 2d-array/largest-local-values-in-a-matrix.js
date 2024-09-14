// * Largest Local Values in a Matrix

/*
You are given an n x n integer matrix grid.

Generate an integer matrix maxLocal of size (n - 2) x (n - 2) such that:

- maxLocal[i][j] is equal to the largest value of the 3 x 3 matrix in grid centered around row i + 1 and column j + 1.

In other words, we want to find the largest value in every contiguous 3 x 3 matrix in grid.

Return the generated matrix.
*/

/**
 * @param {number[][]} grid
 * @returns {number[][]}
 */

// O(n^2) time | O(n^2) space
function largestLocal(grid) {
  const n = grid.length
  const result = []

  // Iterate through the grid, excluding the outermost rows and columns
  for (let i = 1; i < n - 1; i++) {
    const row = []

    for (let j = 1; j < n - 1; j++) {
      let max = 0

      // Find the largest value in the 3 x 3 matrix by iterating through the surrounding cells
      for (let k = i - 1; k <= i + 1; k++) {
        for (let l = j - 1; l <= j + 1; l++) {
          max = Math.max(max, grid[k][l])
        }
      }

      row.push(max)
    }

    result.push(row)
  }

  return result
}

// -------------------------
// TESTS

console.log(
  largestLocal([
    [9, 9, 8, 1],
    [5, 6, 2, 6],
    [8, 2, 6, 4],
    [6, 2, 2, 2],
  ])
) // [[9, 9], [8, 8]]
/*
Explanation: The diagram above shows the original matrix and the generated matrix.
Notice that each value in the generated matrix corresponds to the largest value of a contiguous 3 x 3 matrix in grid.
*/

console.log(
  largestLocal([
    [1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1],
    [1, 1, 2, 1, 1],
    [1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1],
  ])
) // [[2, 2, 2],[2, 2, 2],[2, 2, 2]]
