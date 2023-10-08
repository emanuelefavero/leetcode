// TODO: Add link to README
// TODO: Add jsDoc

// Given an integer numRows, return the first numRows of Pascal's triangle.

// In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:
// https://upload.wikimedia.org/wikipedia/commons/0/0d/PascalTriangleAnimated2.gif

// O(n^2) time | O(n^2) space
function generate(numRows) {
  let result = []

  // loop through the number of rows
  for (let i = 0; i < numRows; i++) {
    let row = []

    // loop through the current row
    for (let j = 0; j <= i; j++) {
      // if we are at the first or last column, add 1
      if (j === 0 || j === i) {
        row.push(1)
      } else {
        // otherwise, add the sum of the two numbers above the current number
        row.push(result[i - 1][j - 1] + result[i - 1][j])
      }
    }

    result.push(row)
  }

  return result
}

// -------------------------
// TESTS

let numRows = 5
console.log(generate(numRows)) // [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
