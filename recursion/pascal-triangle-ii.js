/**
 * * Pascal's Triangle II
 *
 * Given an integer rowIndex, return the rowIndexth (0-indexed) row of the Pascal's triangle
 *
 * In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:
 * @see https://leetcode.com/explore/learn/card/recursion-i/251/scenario-i-recurrence-relation/3234
 *
 * @param {*} rowIndex
 * @returns
 */

// TIP: This solution uses recursion

// O(n^2) time | O(n) space
function getRow(rowIndex) {
  if (rowIndex === 0) return [1]

  const result = [1]

  // we need to get the previous row to calculate the current row
  const prevRow = getRow(rowIndex - 1)

  for (let i = 1; i < rowIndex; i++) {
    // the result at the current index is the sum of the previous row's current index and the previous index
    result[i] = prevRow[i - 1] + prevRow[i]
  }

  // we need to push 1 at the end of the row because the last number in the row is always 1
  result.push(1)

  return result
}

// -------------------------
// SOLUTION 2

// TIP: This solution does not use recursion (you can also find this solution in array/pascal-triangle-ii.js).

function getRow2(rowIndex) {
  const result = []

  // loop through the number of rows
  for (let i = 0; i <= rowIndex; i++) {
    const row = []

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

  return result[rowIndex] // return the sub array at the rowIndex
}

// -------------------------
// TESTS

// 1
console.log(getRow(3)) // [1, 3, 3, 1]
console.log(getRow(1)) // [1, 1]

// 2
console.log(getRow2(3)) // [1, 3, 3, 1]
console.log(getRow2(1)) // [1, 1]
