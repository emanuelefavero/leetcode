// TODO: Add link to README
// TODO: Add solution 2 (from this file comment)
// TODO: Ad jsDoc

// Given an m x n matrix, return all elements of the matrix in spiral order

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

/*
function spiralOrder(matrix) {
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
*/

let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]

console.log(spiralOrder(matrix)) // [1, 2, 3, 6, 9, 8, 7, 4, 5]
