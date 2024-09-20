// * Snake in Matrix

/*
There is a snake in an n x n matrix grid and can move in four possible directions. Each cell in the grid is identified by the position: grid[i][j] = (i * n) + j.

The snake starts at cell 0 and follows a sequence of commands.

You are given an integer n representing the size of the grid and an array of strings commands where each command[i] is either "UP", "RIGHT", "DOWN", and "LEFT". It's guaranteed that the snake will remain within the grid boundaries throughout its movement.

Return the position of the final cell where the snake ends up after executing commands.
*/

/**
 * @param {number} n
 * @param {string[]} commands
 * @returns {number}
 */

// TIP: This solution creates a matrix (even if it is not really needed) and moves the snake through it. It's not the most efficient solution, but it's easy to understand.

// O(n^2) time | O(n^2) space
function finalPositionOfSnake(n, commands) {
  let matrix = createMatrix(n)
  let i = 0
  let j = 0

  for (let command of commands) {
    switch (command) {
      case 'UP':
        i--
        break
      case 'RIGHT':
        j++
        break
      case 'DOWN':
        i++
        break
      case 'LEFT':
        j--
        break

      default:
        break
    }
  }

  return matrix[i][j]
}

function createMatrix(n) {
  const matrix = []
  let count = 0

  for (let i = 0; i < n; i++) {
    matrix[i] = []
    for (let j = 0; j < n; j++) {
      matrix[i][j] = count++
    }
  }

  return matrix
}

// --------------------------
// SOLUTION 2

// TIP: This solution is more efficient than the previous one, as it doesn't create a matrix.

// O(n) time | O(1) space
function finalPositionOfSnake2(n, commands) {
  let position = 0

  for (let command of commands) {
    switch (command) {
      case 'UP':
        position -= n
        break
      case 'RIGHT':
        position++
        break
      case 'DOWN':
        position += n
        break
      case 'LEFT':
        position--
        break

      default:
        break
    }
  }

  return position
}

// --------------------------
// SOLUTION 3

// TIP: This solution also doesn't create a matrix and it is the most efficient one.

// O(n) time | O(1) space
function finalPositionOfSnake3(n, commands) {
  let i = 0
  let j = 0

  for (let command of commands) {
    if (command === 'UP') {
      i--
    } else if (command === 'RIGHT') {
      j++
    } else if (command === 'DOWN') {
      i++
    } else if (command === 'LEFT') {
      j--
    }
  }

  return i * n + j // get the position in the matrix
}

// --------------------------
// TESTS

// 1
console.log(finalPositionOfSnake(2, ['RIGHT', 'DOWN'])) // 3
/*
Explanation:
Start at 0, right to 1, down to 3:
[(0),1] -> [0,(1)] -> [0, 1]
[ 2, 3]    [2, 3]     [2,(3)]
*/

// 2
console.log(finalPositionOfSnake2(2, ['RIGHT', 'DOWN'])) // 3

// 3
console.log(finalPositionOfSnake3(2, ['RIGHT', 'DOWN'])) // 3
