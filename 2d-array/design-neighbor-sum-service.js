// * Design Neighbor Sum Service

/*
You are given a n x n 2D array grid containing distinct elements in the range [0, n2 - 1].

Implement the NeighborSum class:

NeighborSum(int [][]grid) initializes the object.
int adjacentSum(int value) returns the sum of elements which are adjacent neighbors of value, that is either to the top, left, right, or bottom of value in grid.
int diagonalSum(int value) returns the sum of elements which are diagonal neighbors of value, that is either to the top-left, top-right, bottom-left, or bottom-right of value in grid.

@see image: https://leetcode.com/problems/design-neighbor-sum-service/description/
*/

class NeighborSum {
  /**
   * @param {number[][]} grid
   */

  constructor(grid) {
    this.n = grid.length
    this.grid = grid
  }

  /**
   * @param {number} value
   * @returns {number}
   */

  adjacentSum(value) {
    let count = 0

    for (let i = 0; i < this.n; i++) {
      for (let j = 0; j < this.n; j++) {
        if (this.grid[i][j] === value) {
          if (i > 0) count += this.grid[i - 1][j] // top
          if (i < this.n - 1) count += this.grid[i + 1][j] // bottom
          if (j > 0) count += this.grid[i][j - 1] // left
          if (j < this.n - 1) count += this.grid[i][j + 1] // right
        }
      }
    }

    return count
  }

  /**
   * @param {number} value
   * @returns {number}
   */

  diagonalSum(value) {
    let count = 0

    for (let i = 0; i < this.n; i++) {
      for (let j = 0; j < this.n; j++) {
        if (this.grid[i][j] === value) {
          // top-left
          if (i > 0 && j > 0) count += this.grid[i - 1][j - 1]

          // top-right
          if (i > 0 && j < this.n - 1) count += this.grid[i - 1][j + 1]

          // bottom-left
          if (i < this.n - 1 && j > 0) count += this.grid[i + 1][j - 1]

          // bottom-right
          if (i < this.n - 1 && j < this.n - 1) count += this.grid[i + 1][j + 1]
        }
      }
    }

    return count
  }
}

// -------------------------
// TESTS

const grid = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
]

const obj = new NeighborSum(grid)
console.log(obj.adjacentSum(1)) // 6, 0+2+4
console.log(obj.adjacentSum(4)) // 16, 1+3+5+7
console.log(obj.diagonalSum(4)) // 16, 0+2+6+8
console.log(obj.diagonalSum(8)) // 4, 4

/*
Explanation:
The adjacent neighbors of 1 are 0, 2, and 4.
The adjacent neighbors of 4 are 1, 3, 5, and 7.
The diagonal neighbors of 4 are 0, 2, 6, and 8.
The diagonal neighbor of 8 is 4.
*/
