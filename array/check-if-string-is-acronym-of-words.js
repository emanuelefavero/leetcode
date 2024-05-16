// * Check if a String Is an Acronym of Words

/*
Given an array of strings words and a acronym s, determine if s is an acronym of words.

The acronym s is considered an acronym of words if it can be formed by concatenating the first character of each acronym in words in order. For example, "ab" can be formed from ["apple", "banana"], but it can't be formed from ["bear", "aardvark"].

Return true if s is an acronym of words, and false otherwise.
*/

/**
 *
 * @param {string[]} words
 * @param {string} s
 * @returns {boolean}
 */

// O(n) time | O(1) space
function isAcronym(words, s) {
  if (words.length !== s.length) return false

  for (let i = 0; i < words.length; i++) {
    if (words[i][0] !== s[i]) return false
  }

  return true
}

// -----------------------------
// SOLUTION 2

// O(n) time | O(1) space
function isAcronym2(words, s) {
  let acronym = ''

  for (let i = 0; i < words.length; i++) {
    acronym += words[i][0]
  }

  return acronym === s
}

// -----------------------------
// TESTS

// 1
console.log(isAcronym(['alice', 'bob', 'charlie'], 'abc')) // true
console.log(isAcronym(['an', 'apple'], 'a')) // false

// 2
console.log(isAcronym2(['alice', 'bob', 'charlie'], 'abc')) // true
console.log(isAcronym2(['an', 'apple'], 'a')) // false
