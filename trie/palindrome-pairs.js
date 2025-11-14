// * Palindrome Pairs

/*
You are given a 0-indexed array of unique strings words.

A palindrome pair is a pair of integers (i, j) such that:

0 <= i, j < words.length,
i != j, and
words[i] + words[j] (the concatenation of the two strings) is a palindrome.
Return an array of all the palindrome pairs of words.

You must write an algorithm with O(sum of words[i].length) runtime complexity.
*/

/**
 * @param {string[]} words
 * @returns {number[][]}
 */

// O(n^2) time | O(n) space - where n is the number of words
function palindromePairs(words) {
  const map = new Map()
  const result = []

  // Populate map with words and their indices
  for (let i = 0; i < words.length; i++) map.set(words[i], i)

  // Iterate through words
  for (let i = 0; i < words.length; i++) {
    // Check for empty string and find all palindromes
    if (words[i] === '') {
      for (let j = 0; j < words.length; j++)
        if (isPalindrome(words[j]) && j !== i) result.push([i, j], [j, i])
      continue
    }

    // Check for reversed word in map
    const reversedWord = words[i].split('').reverse().join('')
    const matchingIndex = map.get(reversedWord)

    // If reversed word exists in map, add to result
    if (matchingIndex !== undefined && matchingIndex !== i)
      result.push([i, matchingIndex])

    // Check for palindromes in reversed word
    for (let j = 1; j < reversedWord.length; j++) {
      if (isPalindrome(reversedWord, 0, j - 1)) {
        const matchingIndex = map.get(reversedWord.slice(j))

        // If palindrome exists in map, add to result
        if (matchingIndex !== undefined) result.push([i, matchingIndex])
      }

      if (isPalindrome(reversedWord, j)) {
        const matchingIndex = map.get(reversedWord.slice(0, j))

        // If palindrome exists in map, add to result
        if (matchingIndex !== undefined) result.push([matchingIndex, i])
      }
    }
  }

  // Return the array of palindrome pairs
  return result
}

function isPalindrome(word, i = 0, j = word.length - 1) {
  while (i < j) {
    if (word[i] !== word[j]) return false
    i++
    j--
  }
  return true
}

// -------------------------
// TESTS

console.log(palindromePairs(['abcd', 'dcba', 'lls', 's', 'sssll'])) // [[0,1],[1,0],[3,2],[2,4]]
console.log(palindromePairs(['bat', 'tab', 'cat'])) // [[0,1],[1,0]]
