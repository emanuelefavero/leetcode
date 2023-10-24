// * Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), return the number of islands

// An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water

/*
TIP: An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water

EXAMPLE 1:

Input: grid = [
  ["1","1","1","1","0"],
  ["1","1","0","1","0"],
  ["1","1","0","0","0"],
  ["0","0","0","0","0"]
]
Output: 1
Explanation: There is only one island in the above grid because all other 0's are connected to form one island

EXAMPLE 2:

Input: grid = [
  ["1","1","0","0","0"],
  ["1","1","0","0","0"],
  ["0","0","1","0","0"],
  ["0","0","0","1","1"]
]
Output: 3
*/

/**
 * * Depth First Search (DFS) solution
 * @param {string[][]} grid
 * @returns {number}
 */

function numIslands(grid) {
  let count = 0

  function DFS(grid, i, j) {
    if (
      i < 0 || // if i is out of bounds
      i >= grid.length || // if i is out of bounds
      j < 0 || // if j is out of bounds
      j >= grid[i].length || // if j is out of bounds
      grid[i][j] == '0' // if we encounter a '0', return
    ) {
      return
    }

    grid[i][j] = '0' // mark as visited. TIP: We assign '0' so that the DFS function will return if it encounters a '0' in the future

    DFS(grid, i + 1, j) // go down
    DFS(grid, i - 1, j) // go up
    DFS(grid, i, j + 1) // go right
    DFS(grid, i, j - 1) // go left
  }

  // iterate through the grid
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      // if we encounter a '1', increment count and call DFS
      if (grid[i][j] == '1') {
        count += 1

        DFS(grid, i, j) // call DFS on the current cell
      }
    }
  }

  return count
}

// --------------------------
// TESTS

console.log(
  numIslands([
    ['1', '1', '1', '1', '0'],
    ['1', '1', '0', '1', '0'],
    ['1', '1', '0', '0', '0'],
    ['0', '0', '0', '0', '0'],
  ])
) // 1

console.log(
  numIslands([
    ['1', '1', '0', '0', '0'],
    ['1', '1', '0', '0', '0'],
    ['0', '0', '1', '0', '0'],
    ['0', '0', '0', '1', '1'],
  ])
) // 3
