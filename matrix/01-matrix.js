// * 01 Matrix

/*
Given an m x n binary matrix mat, return the distance of the nearest 0 for each cell.

The distance between two adjacent cells is 1.
*/

/**
 * @param {number[][]} mat
 * @returns {number[][]}
 */

// O(n) time | O(n) space
function updateMatrix(mat) {
  let row = mat.length
  let col = mat[0].length

  // loop through the matrix
  for (let r = 0; r < row; r++) {
    for (let c = 0; c < col; c++) {
      if (mat[r][c] === 0) continue // if the current element is 0, skip it

      let left = Infinity
      let top = Infinity
      if (0 <= r - 1) left = mat[r - 1][c] // go up
      if (0 <= c - 1) top = mat[r][c - 1] // go left

      // update the current element with the minimum of the left and top elements + 1
      mat[r][c] = Math.min(left, top) + 1
    }
  }

  // loop through the matrix in reverse
  for (let r = row - 1; r >= 0; r--) {
    for (let c = col - 1; c >= 0; c--) {
      if (mat[r][c] === 0) continue // if the current element is 0, skip it

      let right = Infinity
      let bottom = Infinity
      if (r + 1 < row) right = mat[r + 1][c] // go down
      if (c + 1 < col) bottom = mat[r][c + 1] // go right

      // update the current element with the minimum of the right and bottom elements + 1
      mat[r][c] = Math.min(Math.min(right, bottom) + 1, mat[r][c])
    }
  }

  return mat
}

// --------------------------
// TESTS

console.log(
  updateMatrix([
    [0, 0, 0],
    [0, 1, 0],
    [0, 0, 0],
  ])
)
// [[0,0,0],[0,1,0],[0,0,0]]

console.log(
  updateMatrix([
    [0, 0, 0],
    [0, 1, 0],
    [1, 1, 1],
  ])
)
// [[0,0,0],[0,1,0],[1,2,1]]
