// * Snake in Matrix

/*
There is a snake in an n x n matrix grid and can move in four possible directions. Each cell in the grid is identified by the position: grid[i][j] = (i * n) + j.

The snake starts at cell 0 and follows a sequence of commands.

You are given an integer n representing the size of the grid and an array of strings commands where each command[i] is either "UP", "RIGHT", "DOWN", and "LEFT". It's guaranteed that the snake will remain within the grid boundaries throughout its movement.

Return the position of the final cell where the snake ends up after executing commands.
*/

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
// TESTS

console.log(finalPositionOfSnake(2, ['RIGHT', 'DOWN'])) // 3
/*
Explanation:
Start at 0, right to 1, down to 3:
[(0),1] -> [0,(1)] -> [0, 1]
[ 2, 3]    [2, 3]     [2,(3)]
*/
