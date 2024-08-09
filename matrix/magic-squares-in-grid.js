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
  const sum = (...nums) => nums.reduce((acc, curr) => acc + curr, 0)

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
// TESTS

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
