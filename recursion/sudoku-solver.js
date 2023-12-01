// * Sudoku Solver

/*
Write a program to solve a Sudoku puzzle by filling the empty cells.

A sudoku solution must satisfy all of the following rules:

Each of the digits 1-9 must occur exactly once in each row.
Each of the digits 1-9 must occur exactly once in each column.
Each of the digits 1-9 must occur exactly once in each of the 9 3x3 sub-boxes of the grid.
The '.' character indicates empty cells.
*/

// TODO link
// TODO jsDoc

function solveSudoku(board) {
  let n = board.length
  dfs(board, n)
}

function dfs(board, n) {
  // for every cell in the sudoku
  for (let row = 0; row < n; row++) {
    for (let col = 0; col < n; col++) {
      // if the cell is not empty, skip it ('.' indicates an empty cell)
      if (board[row][col] !== '.') continue

      // if the cell is empty, try to fill it with a number from 1 to 9
      for (let i = 1; i <= 9; i++) {
        let c = i.toString()

        // if the number is valid, fill the cell with the number
        if (isValid(board, row, col, n, c)) {
          board[row][col] = c

          // continue search for that board, return true if it's solved
          if (dfs(board, n)) return true
        }
      }

      // solution wasn't found for any number 1-9, so backtrack
      board[row][col] = '.'

      // return false to signal dead end
      return false
    }
  }

  // all cells are filled, solution is found
  return true
}

// check if the number is valid for the cell
function isValid(board, row, col, n, c) {
  let blockRow = Math.floor(row / 3) * 3 // 0, 3, 6
  let blockCol = Math.floor(col / 3) * 3 // 0, 3, 6

  // loop through the row, column, and block to check if the number is valid
  for (let i = 0; i < n; i++) {
    if (board[row][i] === c || board[i][col] === c) return false

    let currentRow = blockRow + Math.floor(i / 3) // 0, 0, 0, 3, 3, 3, 6, 6, 6
    let currentCol = blockCol + Math.floor(i % 3) // 0, 3, 6, 0, 3, 6, 0, 3, 6

    if (board[currentRow][currentCol] === c) return false
  }

  return true
}

// -----------------------------
// TESTS

let board = [
  ['5', '3', '.', '.', '7', '.', '.', '.', '.'],
  ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
  ['.', '9', '8', '.', '.', '.', '.', '6', '.'],
  ['8', '.', '.', '.', '6', '.', '.', '.', '3'],
  ['4', '.', '.', '8', '.', '3', '.', '.', '1'],
  ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
  ['.', '6', '.', '.', '.', '.', '2', '8', '.'],
  ['.', '.', '.', '4', '1', '9', '.', '.', '5'],
  ['.', '.', '.', '.', '8', '.', '.', '7', '9'],
]

solveSudoku(board)

console.log(board)
/*
OUTPUT:
[
  ['5', '3', '4', '6', '7', '8', '9', '1', '2'],
  ['6', '7', '2', '1', '9', '5', '3', '4', '8'],
  ['1', '9', '8', '3', '4', '2', '5', '6', '7'],
  ['8', '5', '9', '7', '6', '1', '4', '2', '3'],
  ['4', '2', '6', '8', '5', '3', '7', '9', '1'],
  ['7', '1', '3', '9', '2', '4', '8', '5', '6'],
  ['9', '6', '1', '5', '3', '7', '2', '8', '4'],
  ['2', '8', '7', '4', '1', '9', '6', '3', '5'],
  ['3', '4', '5', '2', '8', '6', '1', '7', '9'],
]
*/
