// * Magic Squares In Grid

/*
A 3 x 3 magic square is a 3 x 3 grid filled with distinct numbers from 1 to 9 such that each row, column, and both diagonals all have the same sum.

Given a row x col grid of integers, how many 3 x 3 contiguous magic square subgrids are there?

Note: while a magic square can only contain numbers from 1 to 9, grid may contain numbers up to 15.
*/

/**
 * @param {number[][]} grid
 * @returns {number}
 */

// TIP: This is a brute force solution

// O(n^2) time | O(1) space
function numMagicSquaresInside(grid) {
  const sum = (...set) => set.reduce((acc, curr) => acc + curr, 0)

  let result = 0
  let cols = grid[0].length
  let rows = grid.length

  for (let i = 0; i < cols - 2; i++) {
    for (let j = 0; j < rows - 2; j++) {
      // Filter out numbers greater than 9 and less than 1 in each row
      const row1 = grid[j].slice(i, i + 3).filter((num) => num < 10 && num > 0)
      const row2 = grid[j + 1]
        .slice(i, i + 3)
        .filter((num) => num < 10 && num > 0)
      const row3 = grid[j + 2]
        .slice(i, i + 3)
        .filter((num) => num < 10 && num > 0)

      // Get the sub grid by combining all rows into an array of unique numbers
      const subGrid = new Set([...row1, ...row2, ...row3]) // unique numbers

      // Check if the sub grid is a magic square
      if (subGrid.size === 9) {
        const sumSet = new Set([
          sum(row1[0], row2[1], row3[2]), // diagonal
          sum(row1[2], row2[1], row3[0]), // diagonal
          sum(...row1), // row
          sum(...row2), // row
          sum(...row3), // row
          sum(row1[0], row2[0], row3[0]), // col
          sum(row1[1], row2[1], row3[1]), // col
          sum(row1[2], row2[2], row3[2]), // col
        ])

        if (sumSet.size === 1) result++ // if all sums are equal
      }
    }
  }

  return result
}

// -----------------------
// SOLUTION 2

function numMagicSquaresInside2(grid) {
  const isMagicSquare = (i, j) => {
    const set = new Set() // track unique numbers
    const sum = 15 // 15 is the required sum for rows, columns, and diagonals

    // Loop through the 3x3 subgrid
    for (let x = i; x < i + 3; x++) {
      for (let y = j; y < j + 3; y++) {
        const num = grid[x][y]

        // Check if the number is between 1 and 9 and is unique
        if (num < 1 || num > 9 || set.has(num)) return false
        set.add(num) // add number to the set
      }
    }

    // Check if the sum of all rows, columns, and diagonals equals 15
    return (
      grid[i][j] + grid[i][j + 1] + grid[i][j + 2] === sum && // row 1
      grid[i + 1][j] + grid[i + 1][j + 1] + grid[i + 1][j + 2] === sum && // row 2
      grid[i + 2][j] + grid[i + 2][j + 1] + grid[i + 2][j + 2] === sum && // row 3
      grid[i][j] + grid[i + 1][j] + grid[i + 2][j] === sum && // column 1
      grid[i][j + 1] + grid[i + 1][j + 1] + grid[i + 2][j + 1] === sum && // column 2
      grid[i][j + 2] + grid[i + 1][j + 2] + grid[i + 2][j + 2] === sum && // column 3
      grid[i][j] + grid[i + 1][j + 1] + grid[i + 2][j + 2] === sum && // diagonal 1
      grid[i][j + 2] + grid[i + 1][j + 1] + grid[i + 2][j] === sum // diagonal 2
    )
  }

  let result = 0 // count of magic squares found
  const rows = grid.length
  const cols = grid[0].length

  // Iterate through each possible top-left corner of a 3x3 subgrid
  for (let i = 0; i < rows - 2; i++) {
    for (let j = 0; j < cols - 2; j++) {
      // Early exit condition: the center of the magic square must be 5
      if (grid[i + 1][j + 1] === 5 && isMagicSquare(i, j)) {
        result++ // Increment the count of magic squares found
      }
    }
  }

  return result
}

// -----------------------
// TESTS

// 1
console.log(
  numMagicSquaresInside([
    [4, 3, 8, 4],
    [9, 5, 1, 9],
    [2, 7, 6, 2],
  ])
) // 1
/*
Explanation: 
The following subGrid is a 3 x 3 magic square:
4 3 8
9 5 1
2 7 6

while this one is not:
3 8 4
5 1 9
7 6 2

In total, there is only one magic square inside the given grid.
*/

// 2
console.log(
  numMagicSquaresInside2([
    [4, 3, 8, 4],
    [9, 5, 1, 9],
    [2, 7, 6, 2],
  ])
) // 1
