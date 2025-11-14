// * Sorting the Sentence

/*
A sentence is a list of words that are separated by a single space with no leading or trailing spaces. Each word consists of lowercase and uppercase English letters.

A sentence can be shuffled by appending the 1-indexed word position to each word then rearranging the words in the sentence.

For example, the sentence "This is a sentence" can be shuffled as "sentence4 a3 is2 This1" or "is2 sentence4 This1 a3".
Given a shuffled sentence s containing no more than 9 words, reconstruct and return the original sentence.
*/

/**
 * @param {string} s
 * @returns {string}
 */

// O(n) time | O(n) space
function sortSentence(s) {
  const result = new Array(9).fill(undefined)
  let word = ''

  for (const char of s) {
    if (char !== ' ') {
      if (isNumber(char)) {
        result[char] = word
        word = ''
      } else {
        word += char
      }
    }
  }

  return result.join(' ').trim()
}

function isNumber(char) {
  return /^[1-9]$/.test(char)
}

// -----------------------
// TESTS

console.log(sortSentence('is2 sentence4 This1 a3'))
