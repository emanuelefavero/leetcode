// * Rotate Image

/*
You are given an n x n 2D matrix representing an image, rotate the image by 90 degrees (clockwise).

You have to rotate the image in-place, which means you have to modify the input 2D matrix directly. DO NOT allocate another 2D matrix and do the rotation.

// NOTE: Do not return anything, modify matrix in-place instead
*/

function rotate(matrix) {
  let n = matrix.length

  // Swap rows with columns
  for (let i = 0; i < n; i++) {
    for (let j = i; j < n; j++) {
      let temp = matrix[i][j]
      matrix[i][j] = matrix[j][i]
      matrix[j][i] = temp
    }
  }

  // Reverse each row (comment out to see the effect of only transposing)
  for (let i = 0; i < n; i++) {
    matrix[i].reverse()
  }
}

// -------------------------
// TESTS

let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]

rotate(matrix)

console.log(matrix) // [[7, 4, 1], [8, 5, 2], [9, 6, 3]]
