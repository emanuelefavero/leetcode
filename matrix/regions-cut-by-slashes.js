// * Regions Cut By Slashes

/*
? Difficulty: Medium

An n x n grid is composed of 1 x 1 squares where each 1 x 1 square consists of a '/', '\', or blank space ' '. These characters divide the square into contiguous regions.

Given the grid grid represented as a string array, return the number of regions.

Note that backslash characters are escaped, so a '\' is represented as '\\'.
*/

// TIP: This solution uses a disjoint set (union find) to solve the problem

/**
 * @param {string[]} grid
 * @returns {number}
 */

// O(n^2) time | O(n^2) space
function regionsBySlashes(grid) {
  const n = grid.length
  const size = 4 * n * n // size of the disjoint set (4 cells per square)
  const disjointSet = new DisjointSetUnion(size) // create a disjoint set

  // Iterate over the grid
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      const index = 4 * (i * n + j) // index of the current cell
      const c = grid[i][j] // current character

      // merge with itself
      if (c === ' ') {
        disjointSet.union(index, index + 1)
        disjointSet.union(index + 1, index + 2)
        disjointSet.union(index + 2, index + 3)
      } else if (c === '/') {
        disjointSet.union(index, index + 3)
        disjointSet.union(index + 1, index + 2)
      } else if (c === '\\') {
        disjointSet.union(index, index + 1)
        disjointSet.union(index + 2, index + 3)
      }

      // merge with right
      if (j + 1 < n) {
        const right = 4 * (i * n + j + 1)
        disjointSet.union(index + 1, right + 3)
      }

      // merge with down
      if (i + 1 < n) {
        const down = 4 * ((i + 1) * n + j)
        disjointSet.union(index + 2, down)
      }
    }
  }

  // count distinct regions
  let result = 0
  for (let i = 0; i < size; i++) {
    if (disjointSet.find(i) === i) {
      result++
    }
  }

  return result
}

class DisjointSetUnion {
  /**
   * @param {number} n
   */

  constructor(n) {
    this.parent = Array(n)
      .fill(0)
      .map((_, i) => i)
  }

  find(x) {
    if (this.parent[x] === x) {
      return x
    }
    this.parent[x] = this.find(this.parent[x])
    return this.parent[x]
  }

  union(x, y) {
    this.parent[this.find(x)] = this.find(y)
  }
}

// ----------------------
// SOLUTION 2

// TIP: This solution uses a recursive function to solve the problem

function regionsBySlashes2(grid) {
  const n = grid.length
  // Create a new grid with 3 times the size of the original grid
  const newGrid = Array.from({ length: n * 3 }, () => Array(3 * n).fill(1))

  // Iterate over the original grid
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      // Fill the new grid with the original grid
      if (grid[i][j] == '/') {
        for (let k = 2; k >= 0; k--) newGrid[i * 3 + k][3 * j - k + 2] = 0
      } else if (grid[i][j] == '\\') {
        for (let k = 2; k >= 0; k--) newGrid[i * 3 + k][3 * j + k] = 0
      }
    }
  }

  // Iterate over the new grid and count the regions
  let result = 0
  const newGridLength = newGrid.length
  for (let i = 0; i < newGridLength; i++) {
    for (let j = 0; j < newGridLength; j++) {
      // If the cell is 1, increment the result and call the recursion function
      if (newGrid[i][j] == 1) result++, recursion(newGrid, i, j)
    }
  }
  return result
}

// Recursive function to fill the regions
function recursion(grid, i, j) {
  const dir = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ]

  for (const [x, y] of dir) {
    // Calculate the new coordinates
    const newX = i + x
    const newY = j + y

    // If the cell is 1, set it to 0 and call the recursive function
    if (grid[newX]?.[newY] == 1) {
      grid[newX][newY] = 0
      recursion(grid, newX, newY)
    }
  }
}

// ----------------------
// TESTS

// 1
console.log(regionsBySlashes([' /', '/ '])) // 2
console.log(regionsBySlashes([' /', '  '])) // 1
console.log(regionsBySlashes(['/\\', '\\/'])) // 5
// Explanation: Recall that because \ characters are escaped, "\\/" refers to \/, and "/\\" refers to /\.

// 2
console.log(regionsBySlashes2([' /', '/ '])) // 2
console.log(regionsBySlashes2([' /', '  '])) // 1
console.log(regionsBySlashes2(['/\\', '\\/'])) // 5
