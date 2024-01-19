// * Find Words Containing Character

// You are given a 0-indexed array of strings words and a character x.

// Return an array of indices representing the words that contain the character x.

// Note that the returned array may be in any order.

/**
 * @param {string[]} words
 * @param {string} x
 * @returns {number[]}
 */

// O(n) time | O(n) space - where n is the number of words
function findWordsContaining(words, x) {
  let result = []

  for (let i = 0; i < words.length; i++) {
    if (words[i].includes(x)) result.push(i)
  }

  return result
}

// -------------------------------------------------------------
// SOLUTION 2

// O(n) time | O(n) space - where n is the number of words
function findWordsContaining2(words, x) {
  let result = []

  for (let i = 0; i < words.length; i++) {
    for (let j = 0; j < words[i].length; j++) {
      if (words[i][j] === x) {
        result.push(i)
        break
      }
    }
  }

  return result
}

// -------------------------------------------------------------
// TESTS

console.log(findWordsContaining(['leet', 'code'], 'e')) // [0, 1]
console.log(findWordsContaining2(['leet', 'code'], 'e')) // [0, 1]
