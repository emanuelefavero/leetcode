// * Cells with Odd Values in a Matrix

/*
There is an m x n matrix that is initialized to all 0's. There is also a 2D array indices where each indices[i] = [ri, ci] represents a 0-indexed location to perform some increment operations on the matrix.

For each location indices[i], do both of the following:

Increment all the cells on row ri.
Increment all the cells on column ci.
Given m, n, and indices, return the number of odd-valued cells in the matrix after applying the increment to all locations in indices.
*/

/**
 *
 * @param {number} row
 * @param {number} column
 * @param {number[][]} indices
 * @returns {number}
 */

// O(n^2) time | O(n) space
function oddCells(row, column, indices) {
  const matrix = []
  let count = 0

  for (let i = 0; i < row; i++) {
    matrix[i] = new Array(column).fill(0)
  }

  for (let i = 0; i < indices.length; i++) {
    const [r, c] = indices[i]

    for (let j = 0; j < column; j++) matrix[r][j]++
    for (let j = 0; j < row; j++) matrix[j][c]++
  }

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < column; j++) {
      if (matrix[i][j] % 2 === 1) count++
    }
  }

  return count
}

// ---------------------
// TESTS

console.log(
  oddCells(2, 3, [
    [0, 1],
    [1, 1],
  ])
) // 6
/*
Explanation: Initial matrix = [[0,0,0],[0,0,0]].
After applying first increment it becomes [[1,2,1],[0,1,0]].
The final matrix is [[1,3,1],[1,3,1]], which contains 6 odd numbers.
*/
