// * Count Prefix and Suffix Pairs I

/*
You are given a 0-indexed string array words.

Let's define a boolean function isPrefixAndSuffix that takes two strings, str1 and str2:

- isPrefixAndSuffix(str1, str2) returns true if str1 is both a prefix and a suffix of str2, and false otherwise.

For example, isPrefixAndSuffix("aba", "ababa") is true because "aba" is a prefix of "ababa" and also a suffix, but isPrefixAndSuffix("abc", "abcd") is false.

Return an integer denoting the number of index pairs (i, j) such that i < j, and isPrefixAndSuffix(words[i], words[j]) is true.
*/

/**
 * @param {string} word1
 * @param {string} word2
 * @returns {boolean}
 */

// O(n) time | O(1) space
function isPrefixAndSuffix(word1, word2) {
  let length1 = word1.length
  let length2 = word2.length

  if (length1 > length2) return false

  // isPrefix
  for (let i = 0; i < length1; i++) {
    if (word1[i] !== word2[i]) return false
  }

  // isSuffix
  for (let i = 0; i < length1; i++) {
    if (word1[i] !== word2[length2 - length1 + i]) return false
  }

  return true
}

/**
 * @param {string[]} words
 * @returns {number}
 */

// O(n^2) time | O(1) space
function countPrefixSuffixPairs(words) {
  let count = 0
  let length = words.length

  for (let i = 0; i < length; i++) {
    let word1 = words[i]

    for (let j = i + 1; j < length; j++) {
      let word2 = words[j]
      if (isPrefixAndSuffix(word1, word2)) count++
    }
  }

  return count
}

// -------------------------
// SOLUTION 2

// TIP: This solution uses the built-in methods startsWith and endsWith

function countPrefixSuffixPairs2(words) {
  let count = 0

  for (let i = 0; i < words.length; i++) {
    for (let j = i + 1; j < words.length; j++) {
      if (words[j].startsWith(words[i]) && words[j].endsWith(words[i])) {
        count++
      }
    }
  }

  return count
}

// -------------------------
// TESTS

// 1
console.log(countPrefixSuffixPairs(['a', 'aba', 'ababa', 'aa'])) // 4
/*
Explanation: In this example, the counted index pairs are:
i = 0 and j = 1 because isPrefixAndSuffix("a", "aba") is true.
i = 0 and j = 2 because isPrefixAndSuffix("a", "ababa") is true.
i = 0 and j = 3 because isPrefixAndSuffix("a", "aa") is true.
i = 1 and j = 2 because isPrefixAndSuffix("aba", "ababa") is true.
Therefore, the answer is 4.
*/

// 2
console.log(countPrefixSuffixPairs2(['a', 'aba', 'ababa', 'aa'])) // 4
