// * Hexadecimal and Hexatrigesimal Conversion

/*
You are given an integer n.

Return the concatenation of the hexadecimal representation of n2 and the hexatrigesimal representation of n3.

A hexadecimal number is defined as a base-16 numeral system that uses the digits 0 – 9 and the uppercase letters A - F to represent values from 0 to 15.

A hexatrigesimal number is defined as a base-36 numeral system that uses the digits 0 – 9 and the uppercase letters A - Z to represent values from 0 to 35.
*/

/**
 * @param {number} n
 * @returns {string}
 */

// O(log n) time | O(1) space
function concatHex36(n) {
  const hex = (n ** 2).toString(16)
  const hex36 = (n ** 3).toString(36)
  const concat = hex + hex36
  return concat.toUpperCase()
}

// -------------------------
// SOLUTION 2

// TIP: One liner solution

function concatHex362(n) {
  return ((n ** 2).toString(16) + (n ** 3).toString(36)).toUpperCase()
}

// -------------------------
// TESTS

// 1
console.log(concatHex36(13)) // "A91P1"
/*
Explanation:

n2 = 13 * 13 = 169. In hexadecimal, it converts to (10 * 16) + 9 = 169, which corresponds to "A9".
n3 = 13 * 13 * 13 = 2197. In hexatrigesimal, it converts to (1 * 362) + (25 * 36) + 1 = 2197, which corresponds to "1P1".

Concatenating both results gives "A9" + "1P1" = "A91P1".
*/

// 2
console.log(concatHex362(13)) // "A91P1"
