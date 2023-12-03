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

// TIP: This is a recursive backtracking solution

function letterCombinations(digits) {
  let hash = {
    2: 'abc',
    3: 'def',
    4: 'ghi',
    5: 'jkl',
    6: 'mno',
    7: 'pqrs',
    8: 'tuv',
    9: 'wxyz',
  }

  let result = []

  if (digits.length === 0) return result

  backtrack(digits, hash, '', result)

  return result
}

function backtrack(digits, hash, current, result) {
  // base case
  if (current.length === digits.length) {
    result.push(current)
    return
  }

  // get the letters for the current digit
  let letters = hash[digits[current.length]]

  // loop through the letters
  for (let i = 0; i < letters.length; i++) {
    // add the letter to the current combination
    backtrack(digits, hash, current + letters[i], result)
  }
}

// -----------------------------
// TESTS

console.log(letterCombinations('23'))
// ["ad","ae","af","bd","be","bf","cd","ce","cf"]
