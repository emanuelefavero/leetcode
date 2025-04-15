// * Strictly Palindromic Number

/*
An integer n is strictly palindromic if, for every base b between 2 and n - 2 (inclusive), the string representation of the integer n in base b is palindromic.

Given an integer n, return true if n is strictly palindromic and false otherwise.

A string is palindromic if it reads the same forward and backward.
*/

/**
 * @param {number} n
 * @returns {boolean}
 */

// O(n^2) time | O(n) space
function isStrictlyPalindromic(n) {
  let length = n - 2
  for (let i = 2; i <= length; i++) {
    let base = n.toString(i)
    let reversed = base.split('').reverse().join('')
    if (base !== reversed) return false
  }
  return true
}

// -------------------------
// SOLUTION 2

// TIP: Since no number greater than 3 is strictly palindromic, we can simply return false and it will be correct for all cases

// O(1) time | O(1) space
const isStrictlyPalindromic2 = (n) => false

// -------------------------
// TESTS

// 1
console.log(isStrictlyPalindromic(9)) // false
/*
Explanation: In base 2: 9 = 1001 (base 2), which is palindromic.
In base 3: 9 = 100 (base 3), which is not palindromic.
Therefore, 9 is not strictly palindromic so we return false.
Note that in bases 4, 5, 6, and 7, n = 9 is also not palindromic.
*/

// 2
console.log(isStrictlyPalindromic2(9)) // false
