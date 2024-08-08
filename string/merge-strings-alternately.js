// * Merge Strings Alternately

/*
You are given two strings word1 and word2. Merge the strings by adding letters in alternating order, starting with word1. If a string is longer than the other, append the additional letters onto the end of the merged string.

Return the merged string.
*/

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
// TESTS

console.log(mergeAlternately('abc', 'pqr')) // 'apbqcr'
/*
Explanation: The merged string will be merged as so:
word1:  a   b   c
word2:    p   q   r
merged: a p b q c r
*/
console.log(mergeAlternately('ab', 'pqrs')) // 'apbqrs'
