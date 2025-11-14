/**
 * * Given an m x n matrix mat, return an array of all the elements of the array in a diagonal order.
 *
 * @see https://leetcode.com/problems/diagonal-traverse/editorial/
 * @param {number[][]} mat m x n matrix
 * @returns {number[]}
 */

// O(n) time | O(1) space
function findDiagonalOrder(mat) {
  const result = []
  const rowLength = mat.length
  const columnLength = mat[0].length
  let row = 0
  let column = 0
  let direction = 1 // 1 for upward, -1 for downward

  // loop until the result array has the same number of elements as the matrix
  while (result.length < rowLength * columnLength) {
    // add the current element to the result array
    result.push(mat[row][column])

    // if we are going upward
    if (direction === 1) {
      // if we are at the last column, go to the next row
      if (column === columnLength - 1) {
        row++
        direction = -1

        // if we are at the first row, go to the next column
      } else if (row === 0) {
        column++
        direction = -1

        // otherwise, go up and to the right
      } else {
        row--
        column++
      }

      // if we are going downward
    } else {
      // if we are at the last row, go to the next column
      if (row === rowLength - 1) {
        column++
        direction = 1

        // if we are at the first column, go to the next row
      } else if (column === 0) {
        row++
        direction = 1

        // otherwise, go down and to the left
      } else {
        row++
        column--
      }
    }
  }

  return result
}

// -------------------------
// SOLUTION 2

// O(n) time | O(1) space
function findDiagonalOrder2(mat) {
  // Check for empty matrices
  if (!mat.length) return []

  // variables to track the size of the matrix
  const N = mat.length
  const M = mat[0].length

  // the two arrays as explained in the algorithm
  let result = []
  let intermediate = []

  // we have to go over all the elements in the first row and the last column to cover all possible diagonals
  for (let d = 0; d < N + M - 1; d++) {
    // clear the intermediate array every time we start to process another diagonal
    intermediate = []

    // we need to figure out the "head" of this diagonal
    // the elements in the first row and the last column are the respective heads.
    let r = d < M ? 0 : d - M + 1
    let c = d < M ? d : M - 1

    // iterate until one of the indices goes out of scope
    // take note of the index math to go down the diagonal
    while (r < N && c > -1) {
      intermediate.push(mat[r][c])
      ++r
      --c
    }

    // reverse even numbered diagonals. The article says we have to reverse odd numbered articles but here, the numbering is starting from 0 :P
    if (d % 2 === 0) intermediate.reverse()

    result = [...result, ...intermediate]
  }

  return result
}

// -------------------------
// TESTS

const mat = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]

console.log(findDiagonalOrder(mat)) // [1, 2, 4, 7, 5, 3, 6, 8, 9]
console.log(findDiagonalOrder2(mat)) // [1, 2, 4, 7, 5, 3, 6, 8, 9]
