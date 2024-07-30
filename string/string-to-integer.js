// * String to Integer (atoi)

/*
Implement the myAtoi(string s) function, which converts a string to a 32-bit signed integer.

The algorithm for myAtoi(string s) is as follows:

Whitespace: Ignore any leading whitespace (" ").
Signedness: Determine the sign by checking if the next character is '-' or '+', assuming positivity is neither present.
Conversion: Read the integer by skipping leading zeros until a non-digit character is encountered or the end of the string is reached. If no digits were read, then the int is 0.
Rounding: If the integer is out of the 32-bit signed integer range [-231, 231 - 1], then round the integer to remain in the range. Specifically, integers less than -231 should be rounded to -231, and integers greater than 231 - 1 should be rounded to 231 - 1.
Return the integer as the final int.
*/

/**
 * @param {string} s
 * @returns {number}
 */

function myAtoi(s) {
  let num = parseInt(s.trim()) || 0
  let max = Math.pow(2, 31) - 1
  let min = Math.pow(-2, 31)

  if (num > max) return max
  if (num < min) return min
  return num
}

// -------------------------
// SOLUTION 2

// O(n) time | O(1) space
function myAtoi2(s) {
  let MIN_INT = -2147483648
  let MAX_INT = 2147483647

  // Whitespace:
  s = s.trim()

  // Signed-ness:
  const isNegative = s[0] === '-'
  if (isNegative || s[0] === '+') s = s.slice(1)

  // Conversion:
  while (true) {
    if (s[0] !== '0') break
    else s = s.slice(1)
  }

  let int = ''

  for (let i = 0; i < s.length; i++) {
    if (s[i] >= '0' && s[i] <= '9') {
      int += s[i]
    } else break
  }

  if (int === '') return 0
  int = isNegative ? parseInt('-' + int) : parseInt(int)

  // Rounding:
  if (int < MIN_INT) return MIN_INT
  if (int > MAX_INT) return MAX_INT
  return int
}

// -------------------------
// TESTS

// 1
console.log(myAtoi('42')) // 42
console.log(myAtoi(' -042')) // -42
console.log(myAtoi('1337c0d3')) // 4193

// 2
console.log(myAtoi2('42')) // 42
console.log(myAtoi2(' -042')) // -42
console.log(myAtoi2('1337c0d3')) // 4193
