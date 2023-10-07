/**
 * * Given an m x n matrix, return all elements of the matrix in spiral order
 *
 * @param {number[][]} matrix m x n matrix
 * @returns {number[]}
 */

// O(n) time | O(n) space
function spiralOrder(matrix) {
  // Extract the first row of the matrix and the rightmost elements of each remaining row
  let firstRowAndRightmost = [...matrix.shift(), ...matrix.map((m) => m.pop())]

  // Filter out non-empty rows, reverse them, and reverse each row to maintain the spiral order
  let remainingMatrix = matrix
    .filter((m) => m.length)
    .reverse()
    .map((m) => m.reverse())

  // Recursively concatenate the extracted elements with the spiral order of the filtered matrix
  // If there is only one row left, append it to the result, otherwise continue the recursion
  return [
    ...firstRowAndRightmost,
    ...(remainingMatrix.length > 1
      ? spiralOrder(remainingMatrix)
      : remainingMatrix[0] ?? []),
  ]
}

// -------------------------------
// SOLUTION 2

// O(n) time | O(1) space
function spiralOrder2(matrix) {
  let m = matrix.length
  let n = matrix[0].length
  let result = []
  let k = 0
  let l = 0
  let i

  while (k < m && l < n) {
    for (i = l; i < n; i++) {
      result.push(matrix[k][i])
    }
    k++

    for (i = k; i < m; i++) {
      result.push(matrix[i][n - 1])
    }
    n--

    if (k < m) {
      for (i = n - 1; i >= l; i--) {
        result.push(matrix[m - 1][i])
      }
      m--
    }

    if (l < n) {
      for (i = m - 1; i >= k; i--) {
        result.push(matrix[i][l])
      }
      l++
    }
  }

  return result
}

// -------------------------------
// TESTS

let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]

console.log(spiralOrder(matrix)) // [1, 2, 3, 6, 9, 8, 7, 4, 5]

// NOTE: UNCOMMENT FOR SOLUTION 2 (COMMENT OUT THE PREVIOUS LINE)
// console.log(spiralOrder2(matrix)) // [1, 2, 3, 6, 9, 8, 7, 4, 5]
