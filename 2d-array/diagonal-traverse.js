/**
 * * Given an m x n matrix mat, return an array of all the elements of the array in a diagonal order.
 *
 * @see https://leetcode.com/problems/diagonal-traverse/editorial/
 * @param {number[][]} mat
 * @returns {number[]}
 */

// O(n) time | O(1) space
function findDiagonalOrder(mat) {
  // Check for empty matrices
  if (!mat.length) return []

  // Variables to track the size of the matrix
  let N = mat.length
  let M = mat[0].length

  // The two arrays as explained in the algorithm
  let result = []
  let intermediate = []

  // We have to go over all the elements in the first row and the last column to cover all possible diagonals
  for (let d = 0; d < N + M - 1; d++) {
    // Clear the intermediate array every time we start to process another diagonal
    intermediate = []

    // We need to figure out the "head" of this diagonal
    // The elements in the first row and the last column are the respective heads.
    let r = d < M ? 0 : d - M + 1
    let c = d < M ? d : M - 1

    // Iterate until one of the indices goes out of scope
    // Take note of the index math to go down the diagonal
    while (r < N && c > -1) {
      intermediate.push(mat[r][c])
      ++r
      --c
    }

    // Reverse even numbered diagonals. The article says we have to reverse odd numbered articles but here, the numbering is starting from 0 :P
    if (d % 2 === 0) intermediate.reverse()

    result = [...result, ...intermediate]
  }

  return result
}

// -------------------------
// TESTS

let mat = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]

console.log(findDiagonalOrder(mat)) // [1, 2, 4, 7, 5, 3, 6, 8, 9]
