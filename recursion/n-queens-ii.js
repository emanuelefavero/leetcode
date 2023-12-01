// * N-Queens II

// The n-queens puzzle is the problem of placing n queens on an n x n chessboard such that no two queens attack each other.

// Given an integer n, return the number of distinct solutions to the n-queens puzzle.

/**
 * @param {number} n
 * @returns {number}
 */

// TIP: This solution uses a backtracking approach @see https://leetcode.com/explore/learn/card/recursion-ii/472/backtracking/2654

// O(n!) time - O(n) space
function totalNQueens(n) {
  let occupiedColumns = new Set()
  let positiveDiagonals = new Set()
  let negativeDiagonals = new Set()

  let solutionCount = 0

  function computePositionForRow(row) {
    if (row === n) {
      solutionCount++
      return
    }

    for (let col = 0; col < n; col++) {
      if (
        occupiedColumns.has(col) ||
        positiveDiagonals.has(row + col) ||
        negativeDiagonals.has(row - col)
      ) {
        continue
      }

      occupiedColumns.add(col)
      positiveDiagonals.add(row + col)
      negativeDiagonals.add(row - col)

      computePositionForRow(row + 1)

      occupiedColumns.delete(col)
      positiveDiagonals.delete(row + col)
      negativeDiagonals.delete(row - col)
    }
  }

  computePositionForRow(0)

  return solutionCount
}

// -----------------------------
// TESTS

console.log(totalNQueens(4)) // 2
console.log(totalNQueens(1)) // 1
