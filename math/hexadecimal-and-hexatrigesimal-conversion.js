// * Hexadecimal and Hexatrigesimal Conversion

/*
You are given an integer n.

Return the concatenation of the hexadecimal representation of n2 and the hexatrigesimal representation of n3.

A hexadecimal number is defined as a base-16 numeral system that uses the digits 0 – 9 and the uppercase letters A - F to represent values from 0 to 15.

A hexatrigesimal number is defined as a base-36 numeral system that uses the digits 0 – 9 and the uppercase letters A - Z to represent values from 0 to 35.
*/

function concatHex36(n) {
  const hex = (n ** 2).toString(16)
  const hex36 = (n ** 3).toString(36)
  const concat = hex + hex36
  return concat.toUpperCase()
}

// -------------------------
// TESTS

console.log(concatHex36(13)) // "A91P1"
