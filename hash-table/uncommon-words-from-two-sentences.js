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
  const arr1 = s1.split(' ')
  const arr2 = s2.split(' ')

  // Count the words in both sentences
  const map2 = new Map()
  const map1 = new Map()

  for (const word of arr1) {
    map1.set(word, (map1.get(word) || 0) + 1)
  }
  for (const word of arr2) {
    map2.set(word, (map2.get(word) || 0) + 1)
  }

  // Check for uncommon words in both sentences
  const result = []

  for (const [key, value] of map1) {
    if (value === 1 && !map2.has(key)) result.push(key)
  }

  for (const [key, value] of map2) {
    if (value === 1 && !map1.has(key)) result.push(key)
  }

  return result
}

// -----------------------------
// SOLUTION 2

// TIP: This solution is the same as the first one, but uses a DRY approach

function uncommonFromSentences2(s1, s2) {
  const arr1 = s1.split(' ')
  const arr2 = s2.split(' ')

  const countWords = (arr) => {
    const map = new Map()
    for (const word of arr) {
      map.set(word, (map.get(word) || 0) + 1)
    }
    return map
  }

  const map1 = countWords(arr1)
  const map2 = countWords(arr2)

  const checkUncommon = (map1, map2) => {
    const result = []
    for (const [key, value] of map1) {
      if (value === 1 && !map2.has(key)) result.push(key)
    }
    return result
  }

  return [...checkUncommon(map1, map2), ...checkUncommon(map2, map1)]
}

// -----------------------------
// TESTS

// 1
console.log(uncommonFromSentences('this apple is sweet', 'this apple is sour')) // ['sweet', 'sour']
// Explanation: The word "sweet" appears only in s1, while the word "sour" appears only in s2.
console.log(uncommonFromSentences('apple apple', 'banana')) // ['banana']

// 2
console.log(uncommonFromSentences2('this apple is sweet', 'this apple is sour')) // ['sweet', 'sour']
console.log(uncommonFromSentences2('apple apple', 'banana')) // ['banana']
