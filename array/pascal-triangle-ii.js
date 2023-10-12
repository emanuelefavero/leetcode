// Given an integer rowIndex, return the rowIndex th (0-indexed) row of the Pascal's triangle

// In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:
// https://leetcode.com/explore/learn/card/array-and-string/204/conclusion/1171/

function getRow(rowIndex) {
  let result = []

  // loop through the number of rows
  for (let i = 0; i <= rowIndex; i++) {
    let row = []

    // loop through the current row
    for (let j = 0; j <= i; j++) {
      // if we are at the first or last column, add 1 (the first or last column always has 1)
      if (j === 0 || j === i) {
        row.push(1)
      } else {
        // otherwise, add the sum of the two numbers above the current number
        row.push(result[i - 1][j - 1] + result[i - 1][j])
      }
    }

    result.push(row)
  }

  return result[rowIndex]
}

console.log(getRow(3)) // [1, 3, 3, 1]
console.log(getRow(1)) // [1, 1]
