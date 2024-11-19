// * Determine Color of a Chessboard Square

/*
You are given coordinates, a string that represents the coordinates of a square of the chessboard. Below is a chessboard for your reference.

8 | W | B | W | B | W | B | W | B |
7 | B | W | B | W | B | W | B | W |
6 | W | B | W | B | W | B | W | B |
5 | B | W | B | W | B | W | B | W |
4 | W | B | W | B | W | B | W | B |
3 | B | W | B | W | B | W | B | W |
2 | W | B | W | B | W | B | W | B |
1 | B | W | B | W | B | W | B | W |
    a   b   c   d   e   f   g   h

Return true if the square is white, and false if the square is black.

The coordinate will always represent a valid chessboard square. The coordinate will always have the letter first, and the number second.
*/

/**
 * @param {string} coordinates
 * @returns {boolean}
 */

// TIP: The square is white if the letter's ASCII code is odd (e.g. 'a' = 97) and the number is even (e.g. 2)

// O(1) time | O(1) space
function squareIsWhite(coordinates) {
  return coordinates[0].charCodeAt(0) % 2 !== parseInt(coordinates[1]) % 2
}

// -------------------------
// TESTS

console.log(squareIsWhite('a1')) // false
console.log(squareIsWhite('h3')) // true
console.log(squareIsWhite('c7')) // false
