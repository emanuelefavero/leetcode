// * Uncommon Words from Two Sentences

/*
A sentence is a string of single-space separated words where each word consists only of lowercase letters.

A word is uncommon if it appears exactly once in one of the sentences, and does not appear in the other sentence.

Given two sentences s1 and s2, return a list of all the uncommon words. You may return the answer in any order.
*/

/**
 * @param {string} s1
 * @param {string} s2
 * @returns {string[]}
 */

// O(n) time | O(n) space
function uncommonFromSentences(s1, s2) {
  let arr1 = s1.split(' ')
  let arr2 = s2.split(' ')

  // Count the words in both sentences
  let map2 = new Map()
  let map1 = new Map()

  for (let word of arr1) {
    map1.set(word, (map1.get(word) || 0) + 1)
  }
  for (let word of arr2) {
    map2.set(word, (map2.get(word) || 0) + 1)
  }

  // Check for uncommon words in both sentences
  let result = []

  for (let [key, value] of map1) {
    if (value === 1 && !map2.has(key)) result.push(key)
  }

  for (let [key, value] of map2) {
    if (value === 1 && !map1.has(key)) result.push(key)
  }

  return result
}

// -----------------------------
// TESTS

console.log(uncommonFromSentences('this apple is sweet', 'this apple is sour')) // ['sweet', 'sour']
// Explanation: The word "sweet" appears only in s1, while the word "sour" appears only in s2.
console.log(uncommonFromSentences('apple apple', 'banana'))
