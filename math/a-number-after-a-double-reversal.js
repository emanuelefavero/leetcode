// * A Number After a Double Reversal

/*
Reversing an integer means to reverse all its digits.

- For example, reversing 2021 gives 1202. Reversing 12300 gives 321 as the leading zeros are not retained.

Given an integer num, reverse num to get reversed1, then reverse reversed1 to get reversed2. Return true if reversed2 equals num. Otherwise return false.
*/

/**
 * @param {number} num
 * @returns {boolean}
 */

// O(n) time | O(1) space, where n is the number of digits in num
function isSameAfterReversals(num) {
  let reversed = Number(num.toString().split('').reverse().join(''))
  let reversed2 = Number(reversed.toString().split('').reverse().join(''))
  return reversed2 === num
}

// -------------------------
// TESTS

console.log(isSameAfterReversals(526)) // true
// Explanation: Reverse num to get 625, then reverse 625 to get 526, which equals num.
console.log(isSameAfterReversals(1800)) // false
// Explanation: Reverse num to get 81, then reverse 81 to get 18, which does not equal num.
