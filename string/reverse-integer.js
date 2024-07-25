// * Reverse Integer

// Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

// Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

/**
 * @param {number} number
 * @returns {number}
 */

// O(n) time | O(n) space
function reverse(x) {
  let stringArray = x.toString().split('')

  let reversed
  if (stringArray[0] === '-') {
    reversed = parseInt('-' + stringArray.slice(1).reverse().join(''))
  } else {
    reversed = parseInt(stringArray.reverse().join(''))
  }

  if (isOutsideInt32Range(reversed)) return 0

  return reversed
}

function isOutsideInt32Range(number) {
  const MIN_INT32 = -2147483648
  const MAX_INT32 = 2147483647
  return number < MIN_INT32 || number > MAX_INT32
}

// -------------------------
// TESTS

console.log(reverse(123)) // 321
console.log(reverse(-123)) // -321
