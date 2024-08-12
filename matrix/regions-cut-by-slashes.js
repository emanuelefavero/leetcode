// * Regions Cut By Slashes

/*
? Difficulty: Medium

An n x n grid is composed of 1 x 1 squares where each 1 x 1 square consists of a '/', '\', or blank space ' '. These characters divide the square into contiguous regions.

Given the grid grid represented as a string array, return the number of regions.

Note that backslash characters are escaped, so a '\' is represented as '\\'.
*/

// TIP: This solution uses a disjoint set (union find) to solve the problem

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
// TESTS

console.log(regionsBySlashes([' /', '/ '])) // 2
console.log(regionsBySlashes([' /', '  '])) // 1
console.log(regionsBySlashes(['/\\', '\\/'])) // 5
// Explanation: Recall that because \ characters are escaped, "\\/" refers to \/, and "/\\" refers to /\.
