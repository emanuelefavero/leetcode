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

  let result = [1]

  // we need to get the previous row to calculate the current row
  let prevRow = getRow(rowIndex - 1)

  for (let i = 1; i < rowIndex; i++) {
    // the result at the current index is the sum of the previous row's current index and the previous index
    result[i] = prevRow[i - 1] + prevRow[i]
  }

  // we need to push 1 at the end of the row because the last number in the row is always 1
  result.push(1)

  return result
}

// -------------------------
// TESTS

console.log(getRow(3)) // [1, 3, 3, 1]
console.log(getRow(1)) // [1, 1]
