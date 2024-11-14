// * Remove Trailing Zeros From a String

// Given a positive integer num represented as a string, return the integer num without trailing zeros as a string.

/**
 * @param {string} num
 * @returns {string}
 */

// O(n) time | O(1) space
function removeTrailingZeros(num) {
  for (let i = num.length - 1; i >= 0; i--) {
    if (num[i] === '0') {
      num = num.slice(0, -1)
    } else break
  }
  return num
}

// -------------------------
// SOLUTION 2

// TIP: This solution uses regex to remove trailing zeros
// TIP: $ means end of the string

function removeTrailingZeros2(num) {
  return num.replace(/0+$/, '')
}

// -------------------------
// TESTS

// 1
console.log(removeTrailingZeros('51230100')) // '512301'
console.log(removeTrailingZeros('123')) // '123'

// 2
console.log(removeTrailingZeros2('51230100')) // '512301'
console.log(removeTrailingZeros2('123')) // '123'
