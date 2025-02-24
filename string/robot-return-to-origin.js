// * Robot Return to Origin

/*
There is a robot starting at the position (0, 0), the origin, on a 2D plane. Given a sequence of its moves, judge if this robot ends up at (0, 0) after it completes its moves.

You are given a string moves that represents the move sequence of the robot where moves[i] represents its ith move. Valid moves are 'R' (right), 'L' (left), 'U' (up), and 'D' (down).

Return true if the robot returns to the origin after it finishes all of its moves, or false otherwise.

Note: The way that the robot is "facing" is irrelevant. 'R' will always make the robot move to the right once, 'L' will always make it move left, etc. Also, assume that the magnitude of the robot's movement is the same for each move.
*/

/**
 * @param {string} moves
 * @returns {boolean}
 */

// O(n) time | O(1) space
function judgeCircle(moves) {
  let x = 0
  let y = 0

  for (let move of moves) {
    if (move === 'L') x--
    else if (move === 'R') x++
    else if (move === 'D') y--
    else if (move === 'U') y++
  }

  return x === 0 && y === 0
}

// -------------------------
// SOLUTION 2

// TIP: This solution uses a switch statement

function judgeCircle2(moves) {
  let x = 0
  let y = 0

  for (let move of moves) {
    switch (move) {
      case 'L':
        x--
        break
      case 'R':
        x++
        break
      case 'D':
        y--
        break
      case 'U':
        y++
        break
    }
  }

  if (x === 0 && y === 0) return true
  return false
}

// -------------------------
// TESTS

// 1
console.log(judgeCircle('UD')) // true
/*
Explanation: The robot moves up once, and then down once. All moves have the same magnitude, so it ended up at the origin where it started. Therefore, we return true.
*/
console.log(judgeCircle('LL')) // false

// 2
console.log(judgeCircle2('UD')) // true
console.log(judgeCircle2('LL')) // false
