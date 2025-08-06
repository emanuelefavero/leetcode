// * Generate Binary Strings Without Adjacent Zeros

/*
? Difficulty: Medium

You are given a positive integer n.

A binary string x is valid if all substrings of x of length 2 contain at least one "1".

Return all valid strings with length n, in any order.
*/

/**
 * @param {number} n
 * @returns {string[]}
 */

// O(2^n) time | O(n) space
function validStrings(n) {
  if (n === 1) return ['0', '1']

  let result = []

  for (let s of validStrings(n - 1)) {
    result.push(`1${s}`)
    if (s[0] === '1') result.push(`0${s}`)
  }

  return result
}

// -------------------------
// TESTS

console.log(validStrings(3)) // ["010","011","101","110","111"]
console.log(validStrings(1)) // ["0","1"]
