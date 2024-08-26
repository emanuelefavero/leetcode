// * Cells in a Range on an Excel Sheet

/*
A cell (r, c) of an excel sheet is represented as a string "<col><currentRow>" where:

- <col> denotes the col number c of the cell. It is represented by alphabetical letters.
  - For example, the 1st col is denoted by 'A', the 2nd by 'B', the 3rd by 'C', and so on.
- <currentRow> is the currentRow number r of the cell. The rth currentRow is represented by the integer r.

You are given a string s in the format "<col1><row1>:<col2><row2>", where <col1> represents the col c1, <row1> represents the currentRow r1, <col2> represents the col c2, and <row2> represents the currentRow r2, such that r1 <= r2 and c1 <= c2.

Return the list of cells (row, y) such that r1 <= row <= r2 and c1 <= y <= c2. The cells should be represented as strings in the format mentioned above and be sorted in non-decreasing order first by columns and then by rows.
*/

function cellsInRange(s) {
  let result = []

  let col1 = s.charCodeAt(0)
  let col2 = s.charCodeAt(3)
  let row1 = +s[1]
  let row2 = +s[4]

  for (let col = col1; col <= col2; col++) {
    for (let row = row1; row <= row2; row++) {
      result.push(String.fromCharCode(col) + row)
    }
  }

  return result
}

// -------------------------
// SOLUTION 2

function cellsInRange2(s) {
  let result = []
  let col1 = s[0]
  let col2 = s[3]
  let cols = colsInRange(col1, col2)
  let row1 = s[1]
  let row2 = s[4]

  for (let col of cols) {
    for (let row = row1; row <= row2; row++) {
      result.push(col + row)
    }
  }

  return result
}

function colsInRange(col1, col2) {
  let start = col1.charCodeAt(0)
  let end = col2.charCodeAt(0)
  let result = []

  for (let i = start; i <= end; i++) {
    result.push(String.fromCharCode(i))
  }

  return result
}

// -------------------------
// TESTS

// 1
console.log(cellsInRange('K1:L2')) // ['K1', 'K2', 'L1', 'L2']
// Explanation: The above diagram shows the cells which should be present in the list. The red arrows denote the order in which the cells should be presented.

console.log(cellsInRange('A1:F1')) // ['A1', 'B1', 'C1', 'D1', 'E1', 'F1']

// 2
console.log(cellsInRange2('K1:L2')) // ['K1', 'K2', 'L1', 'L2']
console.log(cellsInRange2('A1:F1')) // ['A1', 'B1', 'C1', 'D1', 'E1', 'F1']
