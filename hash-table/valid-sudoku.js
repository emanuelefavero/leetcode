/*
* Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:

Each row must contain the digits 1-9 without repetition.
Each column must contain the digits 1-9 without repetition.
Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.
Note:

A Sudoku board (partially filled) could be valid but is not necessarily solvable.
Only the filled cells need to be validated according to the mentioned rules.
*/

/**
 * @param {string[][]} board
 * @returns {boolean}
 */

function isValidSudoku(board) {
  for (let i = 0; i < 9; i++) {
    let row = new Set(),
      col = new Set(),
      box = new Set()

    for (let j = 0; j < 9; j++) {
      let _row = board[i][j]
      let _col = board[j][i]
      // TIP: This is the formula to get the row and column of the 3x3 box
      let _box =
        board[3 * Math.floor(i / 3) + Math.floor(j / 3)][3 * (i % 3) + (j % 3)]

      if (_row !== '.') {
        if (row.has(_row)) return false
        row.add(_row)
      }
      if (_col !== '.') {
        if (col.has(_col)) return false
        col.add(_col)
      }

      if (_box !== '.') {
        if (box.has(_box)) return false
        box.add(_box)
      }
    }
  }
  return true
}

// -----------------------------
// SOLUTION 2

function isValidSudoku2(board) {
  // rows
  for (let i = 0; i < 9; i++) {
    let nums = new Set()

    for (let j = 0; j < 9; j++) {
      if (nums.has(board[i][j])) return false
      else if (board[i][j] !== '.') nums.add(board[i][j])
    }
  }

  // columns
  for (let i = 0; i < 9; i++) {
    let nums = new Set()

    for (let j = 0; j < 9; j++) {
      if (nums.has(board[j][i])) return false
      else if (board[j][i] !== '.') nums.add(board[j][i])
    }
  }

  // boxes
  for (let i = 0; i < 9; i++) {
    let nums = new Set()

    for (let j = 0; j < 9; j++) {
      // TIP: This is the formula to get the row and column of the 3x3 box
      let row = Math.floor(i / 3) * 3 + Math.floor(j / 3)
      let column = (j % 3) + 3 * (i % 3)

      if (nums.has(board[row][column])) return false
      else if (board[row][column] !== '.') nums.add(board[row][column])
    }
  }

  return true
}

// -----------------------------
// TESTS

// Solution 1
console.log(
  isValidSudoku([
    ['5', '3', '.', '.', '7', '.', '.', '.', '.'],
    ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
    ['.', '9', '8', '.', '.', '.', '.', '6', '.'],
    ['8', '.', '.', '.', '6', '.', '.', '.', '3'],
    ['4', '.', '.', '8', '.', '3', '.', '.', '1'],
    ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
    ['.', '6', '.', '.', '.', '.', '2', '8', '.'],
    ['.', '.', '.', '4', '1', '9', '.', '.', '5'],
    ['.', '.', '.', '.', '8', '.', '.', '7', '9'],
  ])
) // true

console.log(
  isValidSudoku([
    ['8', '3', '.', '.', '7', '.', '.', '.', '.'],
    ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
    ['.', '9', '8', '.', '.', '.', '.', '6', '.'],
    ['8', '.', '.', '.', '6', '.', '.', '.', '3'],
    ['4', '.', '.', '8', '.', '3', '.', '.', '1'],
    ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
    ['.', '6', '.', '.', '.', '.', '2', '8', '.'],
    ['.', '.', '.', '4', '1', '9', '.', '.', '5'],
    ['.', '.', '.', '.', '8', '.', '.', '7', '9'],
  ])
) // false
// Explanation: Same as above, except with the 5 in the top left corner being modified to 8. Since there are two 8's in the top left 3x3 sub-box, it is invalid

// Solution 2
console.log(
  isValidSudoku2([
    ['5', '3', '.', '.', '7', '.', '.', '.', '.'],
    ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
    ['.', '9', '8', '.', '.', '.', '.', '6', '.'],
    ['8', '.', '.', '.', '6', '.', '.', '.', '3'],
    ['4', '.', '.', '8', '.', '3', '.', '.', '1'],
    ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
    ['.', '6', '.', '.', '.', '.', '2', '8', '.'],
    ['.', '.', '.', '4', '1', '9', '.', '.', '5'],
    ['.', '.', '.', '.', '8', '.', '.', '7', '9'],
  ])
) // true

console.log(
  isValidSudoku2([
    ['8', '3', '.', '.', '7', '.', '.', '.', '.'],
    ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
    ['.', '9', '8', '.', '.', '.', '.', '6', '.'],
    ['8', '.', '.', '.', '6', '.', '.', '.', '3'],
    ['4', '.', '.', '8', '.', '3', '.', '.', '1'],
    ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
    ['.', '6', '.', '.', '.', '.', '2', '8', '.'],
    ['.', '.', '.', '4', '1', '9', '.', '.', '5'],
    ['.', '.', '.', '.', '8', '.', '.', '7', '9'],
  ])
) // false
