// * 01 Matrix

/*
Given an m x n binary matrix mat, return the distance of the nearest 0 for each cell.

The distance between two adjacent cells is 1.
*/

function updateMatrix(mat) {
  const queue = []
  const visited = new Set()

  // iterate through the matrix
  for (let row = 0; row < mat.length; row++) {
    for (let col = 0; col < mat[row].length; col++) {
      // if the current cell is 0, add it to the queue
      if (mat[row][col] === 0) {
        queue.push([row, col])
        visited.add(`${row},${col}`)
      }
    }
  }

  // NOTE: This is the key to the solution, we need to use BFS to find the distance of the nearest 0 for each cell
  while (queue.length) {
    const [row, col] = queue.shift()

    // check the top cell
    if (row > 0 && !visited.has(`${row - 1},${col}`)) {
      mat[row - 1][col] = mat[row][col] + 1
      queue.push([row - 1, col])
      visited.add(`${row - 1},${col}`)
    }

    // check the bottom cell
    if (row < mat.length - 1 && !visited.has(`${row + 1},${col}`)) {
      mat[row + 1][col] = mat[row][col] + 1
      queue.push([row + 1, col])
      visited.add(`${row + 1},${col}`)
    }

    // check the left cell
    if (col > 0 && !visited.has(`${row},${col - 1}`)) {
      mat[row][col - 1] = mat[row][col] + 1
      queue.push([row, col - 1])
      visited.add(`${row},${col - 1}`)
    }

    // check the right cell
    if (col < mat[row].length - 1 && !visited.has(`${row},${col + 1}`)) {
      mat[row][col + 1] = mat[row][col] + 1
      queue.push([row, col + 1])
      visited.add(`${row},${col + 1}`)
    }
  }

  return mat
}

// --------------------------
// TESTS

console.log(
  updateMatrix([
    [0, 0, 0],
    [0, 1, 0],
    [0, 0, 0],
  ])
)
// [[0,0,0],[0,1,0],[0,0,0]]

console.log(
  updateMatrix([
    [0, 0, 0],
    [0, 1, 0],
    [1, 1, 1],
  ])
)
// [[0,0,0],[0,1,0],[1,2,1]]
