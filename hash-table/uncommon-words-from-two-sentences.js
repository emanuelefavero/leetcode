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
  let result = []
  let arr1 = s1.split(' ')
  let arr2 = s2.split(' ')
  let map2 = new Map()
  let map1 = new Map()

  // Count the words in both sentences
  for (let word of arr1) {
    map1.set(word, (map1.get(word) || 0) + 1)
  }
  for (let word of arr2) {
    map2.set(word, (map2.get(word) || 0) + 1)
  }

  // Check if the word in map1 is not in map2 and if it is unique
  for (let [key, value] of map1) {
    if (map1.has(key) && !map2.has(key)) {
      if (value === 1) result.push(key)
    }
  }

  // Check if the word in map2 is not in map1 and if it is unique
  for (let [key, value] of map2) {
    if (map2.has(key) && !map1.has(key)) {
      if (value === 1) result.push(key)
    }
  }

  return result
}

// -----------------------------
// TESTS

console.log(uncommonFromSentences('this apple is sweet', 'this apple is sour')) // ['sweet', 'sour']
// Explanation: The word "sweet" appears only in s1, while the word "sour" appears only in s2.
console.log(uncommonFromSentences('apple apple', 'banana'))
