// * Letter Combinations of a Phone Number

// Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent. Return the answer in any order.

// A mapping of digits to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.

/*
  2: 'abc',
  3: 'def',
  4: 'ghi',
  5: 'jkl',
  6: 'mno',
  7: 'pqrs',
  8: 'tuv',
  9: 'wxyz',
*/

/**
 * @param {string} digits
 * @returns {string[]}
 */

// TIP: This is a recursive backtracking solution

// O(n^2) time - O(n) space
function letterCombinations(digits) {
  if (!digits.length) return []

  const map = {
    2: 'abc',
    3: 'def',
    4: 'ghi',
    5: 'jkl',
    6: 'mno',
    7: 'pqrs',
    8: 'tuv',
    9: 'wxyz',
  }

  const result = []

  function backtrack(string, i) {
    // base case
    if (digits.length === i) {
      return result.push(string)
    }

    for (const char of map[digits[i]]) {
      backtrack(string + char, i + 1)
    }
  }

  backtrack('', 0) // start at char 0

  return result
}

// -----------------------------
// TESTS

console.log(letterCombinations('23'))
// ["ad","ae","af","bd","be","bf","cd","ce","cf"]
