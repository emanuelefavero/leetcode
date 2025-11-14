// * Check Balanced String

// You are given a string num consisting of only digits. A string of digits is called balanced if the sum of the digits at even indices is equal to the sum of digits at odd indices.

// Return true if num is balanced, otherwise return false.

/**
 * @param {string} num
 * @returns {boolean}
 */

// O(n) time | O(1) space
function isBalanced(num) {
  let evenSum = 0
  let oddSum = 0

  for (let i = 0; i < num.length; i++) {
    const digit = Number(num[i])

    if (i % 2 === 0) evenSum += digit
    else oddSum += digit
  }

  return evenSum === oddSum
}

// -------------------------
// TESTS

console.log(isBalanced('1234')) // false
/*
Explanation:

The sum of digits at even indices is 1 + 3 == 4, and the sum of digits at odd indices is 2 + 4 == 6.
Since 4 is not equal to 6, num is not balanced.
*/

console.log(isBalanced('24123')) // true
