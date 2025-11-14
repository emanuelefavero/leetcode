// * Reverse Prefix of Word

/*
Given a 0-indexed string word and a character ch, reverse the segment of word that starts at index 0 and ends at the index of the first occurrence of ch (inclusive). If the character ch does not exist in word, do nothing.

For example, if word = "abcdefd" and ch = "d", then you should reverse the segment that starts at 0 and ends at 3 (inclusive). The resulting string will be "dcbaefd".
Return the resulting string.
*/

// Utility function to reverse a string
function reverse(string) {
  return string.split('').reverse().join('')
}

/**
 * @param {string} word
 * @param {string} ch
 * @returns {string}
 */

// O(n) time | O(1) space
function reversePrefix(word, ch) {
  let right = 0

  for (const char of word) {
    if (char === ch) break
    right++
  }

  if (right >= word.length) return word

  return reverse(word.slice(0, right + 1)) + word.slice(right + 1)
}

// -------------------------
// SOLUTION 2

// TIP: Using indexOf method

// O(n) time | O(1) space
function reversePrefix2(word, ch) {
  const index = word.indexOf(ch)

  if (index === -1) return word

  return reverse(word.slice(0, index + 1)) + word.slice(index + 1)
}

// -------------------------
// TESTS

// 1
console.log(reversePrefix('abcdefd', 'd')) // 'dcbaefd'
// Explanation: The first occurrence of "d" is at index 3.
// Reverse the part of word from 0 to 3 (inclusive), the resulting string is "dcbaefd".

console.log(reversePrefix('abcd', 'z')) // 'abcd'

// 2
console.log(reversePrefix2('abcdefd', 'd')) // 'dcbaefd'
console.log(reversePrefix2('abcd', 'z')) // 'abcd'
