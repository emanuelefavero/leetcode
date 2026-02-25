// * Max Increase to Keep City Skyline

/*
There is a city composed of n x n blocks, where each block contains a single building shaped like a vertical square prism. You are given a 0-indexed n x n integer matrix grid where grid[r][c] represents the height of the building located in the block at row r and column c.

A city's skyline is the outer contour formed by all the building when viewing the side of the city from a distance. The skyline from each cardinal direction north, east, south, and west may be different.

We are allowed to increase the height of any number of buildings by any amount (the amount can be different per building). The height of a 0-height building can also be increased. However, increasing the height of a building should not affect the city's skyline from any cardinal direction.

Return the maximum total sum that the height of the buildings can be increased by without changing the city's skyline from any cardinal direction.
*/

/**
 * @param {number[][]} grid
 * @returns {number}
 */

// O(n^2) time | O(n) space
function maxIncreaseKeepingSkyline(grid) {
  const n = grid.length
  let maxRow = new Array(n).fill(0)
  let maxCol = new Array(n).fill(0)

  // Find the maximum height of each row and column
  for (let r = 0; r < n; r++) {
    for (let c = 0; c < n; c++) {
      maxRow[r] = Math.max(maxRow[r], grid[r][c])
      maxCol[c] = Math.max(maxCol[c], grid[r][c])
    }
  }

  let sum = 0

  // Calculate the total increase by comparing the maximum height of each row and column with the current height of the building
  for (let r = 0; r < n; r++) {
    for (let c = 0; c < n; c++) {
      const maxHeight = Math.min(maxRow[r], maxCol[c])
      sum += maxHeight - grid[r][c]
    }
  }

  return sum
}

// --------------------------
// TESTS

console.log(
  maxIncreaseKeepingSkyline([
    [3, 0, 8, 4],
    [2, 4, 5, 7],
    [9, 2, 6, 3],
    [0, 3, 1, 0],
  ]),
) // 35
/*
Explanation: The building heights are shown in the center of the above image.
The skylines when viewed from each cardinal direction are drawn in red.
The grid after increasing the height of buildings without affecting skylines is:
gridNew = [ [8, 4, 8, 7],
            [7, 4, 7, 7],
            [9, 4, 8, 7],
            [3, 3, 3, 3] ]
*/
