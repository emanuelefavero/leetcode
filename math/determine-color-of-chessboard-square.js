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
// SOLUTION 2

// TIP: Use destructuring to get the letter and number
// TIP: Use the unary operator '+' to convert the number to a number

function squareIsWhite2(coordinates) {
  const [x, y] = coordinates
  return x.charCodeAt(0) % 2 !== +y % 2
}

// -------------------------
// SOLUTION 3

// TIP: The following solution is not more efficient but it can be easier to understand. Basically, we create a map with the letters and their corresponding numbers. Then we check if the letter is odd and the number is odd. If both are odd or both are even, the square is white.

function squareIsWhite3(coordinates) {
  const map = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5,
    f: 6,
    g: 7,
    h: 8,
  }

  const isLetterOdd = map[coordinates[0]] % 2 !== 0
  const isNumberOdd = parseInt(coordinates[1]) % 2 !== 0

  return isLetterOdd !== isNumberOdd
}

// -------------------------
// TESTS

// 1
console.log(squareIsWhite('a1')) // false
console.log(squareIsWhite('h3')) // true
console.log(squareIsWhite('c7')) // false

// 2
console.log(squareIsWhite2('a1')) // false
console.log(squareIsWhite2('h3')) // true
console.log(squareIsWhite2('c7')) // false

// 3
console.log(squareIsWhite3('a1')) // false
console.log(squareIsWhite3('h3')) // true
console.log(squareIsWhite3('c7')) // false
