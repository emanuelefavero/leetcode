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
// SOLUTION 2

function validStrings2(n) {
  const result = []

  const generate = (s) => {
    // base case: if the string length is n, add it to the result
    if (s.length === n) {
      result.push(s)
      return
    }

    // If the last character in the string is '0', we can only add '1' to avoid adjacent zeros
    if (s[s.length - 1] === '0') {
      generate(s + '1')
    }

    // If the last character is '1' or if the string is empty, we can add both '0' and '1'
    else {
      generate(s + '0')
      generate(s + '1')
    }
  }

  generate('')

  return result
}

// -------------------------
// TESTS

// 1
console.log(validStrings(3)) // ["010","011","101","110","111"]
console.log(validStrings(1)) // ["0","1"]

// 2
console.log(validStrings2(3)) // ["010","011","101","110","111"]
console.log(validStrings2(1)) // ["0","1"]
