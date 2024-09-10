// * Check if the Sentence Is Pangram

// A pangram is a sentence where every letter of the English alphabet appears at least once.

// Given a string sentence containing only lowercase English letters, return true if sentence is a pangram, or false otherwise.

/**
 * @param {string} sentence
 * @returns {boolean}
 */

// O(n) time | O(1) space
function checkIfPangram(sentence) {
  let alphabet = 'abcdefghijklmnopqrstuvwxyz'
  let map = new Map()

  for (let char of sentence) {
    map.set(char, true)
  }

  for (let char of alphabet) {
    if (!map.has(char)) return false
  }

  return true
}

// -------------------------
// TESTS

console.log(checkIfPangram('thequickbrownfoxjumpsoverthelazydog')) // true
// Explanation: sentence contains at least one of every letter of the English alphabet.

console.log(checkIfPangram('hello')) // false
