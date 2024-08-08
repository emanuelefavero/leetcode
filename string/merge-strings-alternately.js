// * Merge Strings Alternately

/*
You are given two strings word1 and word2. Merge the strings by adding letters in alternating order, starting with word1. If a string is longer than the other, append the additional letters onto the end of the merged string.

Return the merged string.
*/

/**
 * @param {string} word1
 * @param {string} word2
 * @returns {string}
 */

// O(n) time | O(n) space
function mergeAlternately(word1, word2) {
  let result = ''

  let i = 0

  while (i < word1.length || i < word2.length) {
    if (i < word1.length) result += word1[i]
    if (i < word2.length) result += word2[i]

    i++
  }

  return result
}

// -------------------------
// SOLUTION 2

function mergeAlternately2(word1, word2) {
  let result = ''

  for (let i = 0; i < Math.max(word1.length, word2.length); i++) {
    if (i < word1.length) result += word1[i]
    if (i < word2.length) result += word2[i]
  }

  return result
}

// -------------------------
// TESTS

// 1
console.log(mergeAlternately('abc', 'pqr')) // 'apbqcr'
/*
Explanation: The merged string will be merged as so:
word1:  a   b   c
word2:    p   q   r
merged: a p b q c r
*/
console.log(mergeAlternately('ab', 'pqrs')) // 'apbqrs'

// 2
console.log(mergeAlternately2('abc', 'pqr')) // 'apbqcr'
console.log(mergeAlternately2('ab', 'pqrs')) // 'apbqrs'
