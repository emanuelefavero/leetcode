// * Lucky Numbers in a Matrix

// Given an m x n matrix of distinct numbers, return all lucky numbers in the matrix in any order.

// A lucky number is an element of the matrix such that it is the minimum element in its row and maximum in its column.

function luckyNumbers(matrix) {
  for (let i = 0; i < matrix.length; i++) {
    let min = Math.min(...matrix[i]) // get the min value in the row
    let minIndex = matrix[i].indexOf(min) // get the index of the min value
    let max = min

    // check if the min value is the max value in its column
    for (let j = 0; j < matrix.length; j++) {
      if (matrix[j][minIndex] > max) {
        max = matrix[j][minIndex]
      }
    }

    if (min === max) return [min]
  }

  return []
}

// --------------------------
// TESTS

console.log(
  luckyNumbers([
    [3, 7, 8],
    [9, 11, 13],
    [15, 16, 17],
  ])
) // [15]
// Explanation: 15 is the only lucky number since it is the minimum in its row and the maximum in its column.
