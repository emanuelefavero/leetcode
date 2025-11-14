/**
 * * Check if Two String Arrays are Equivalent
 *
 * Given two string arrays word1 and word2, return true if the two arrays represent the same string, and false otherwise
 *
 * A string is represented by an array if the array elements concatenated in order forms the string
 *
 * @param {string[]} word1
 * @param {string[]} word2
 * @returns {boolean}
 */

// TIP: This solution uses JavaScript built in methods

// O(n) time | O(n) space
function arrayStringsAreEqual(word1, word2) {
  return word1.join('') === word2.join('')
}

// -----------------------------
// SOLUTION 2

// O(n) time | O(n) space
function arrayStringsAreEqual2(word1, word2) {
  let string1 = ''
  let string2 = ''

  for (const s of word1) {
    for (const char of s) {
      string1 += char
    }
  }

  for (const s of word2) {
    for (const char of s) {
      string2 += char
    }
  }

  return string1 === string2
}

// -----------------------------
// TESTS

console.log(arrayStringsAreEqual(['ab', 'c'], ['a', 'bc'])) // true
console.log(arrayStringsAreEqual2(['ab', 'c'], ['a', 'bc'])) // true
