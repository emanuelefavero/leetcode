/**
 * * Length of Last Word
 *
 * Given a string s consisting of words and spaces, return the length of the last word in the string
 *
 * A word is a maximal substring consisting of non-space characters only
 *
 * @param {string} s
 * @returns {number}
 */

// O(n) time | O(n) space
function lengthOfLastWord(s) {
  const trimmedString = s.trim()
  const arrayOfStrings = trimmedString.split(' ')
  const lastWord = arrayOfStrings.pop()
  return lastWord.length
}

// -------------------------
// TESTS

console.log(lengthOfLastWord('Hello World')) // 5
console.log(lengthOfLastWord('   fly me   to   the moon  ')) // 4
