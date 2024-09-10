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
// SOLUTION 2

// TIP: We can use a Set to store the unique characters of the sentence and then check if the size of the set is equal to 26 (number of letters in the English alphabet)

function checkIfPangram2(sentence) {
  let set = new Set([...sentence])
  return set.size === 26
}

// -------------------------
// TESTS

// 1
console.log(checkIfPangram('thequickbrownfoxjumpsoverthelazydog')) // true
// Explanation: sentence contains at least one of every letter of the English alphabet.

console.log(checkIfPangram('hello')) // false

// 2
console.log(checkIfPangram2('thequickbrownfoxjumpsoverthelazydog')) // true
console.log(checkIfPangram2('hello')) // false
