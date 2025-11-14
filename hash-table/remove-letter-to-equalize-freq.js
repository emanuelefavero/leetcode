// * Remove Letter To Equalize Frequency

// TIP: Despite being an Easy problem, the acceptance rate is one of the lowest on LeetCode (18% as of 2025)

/*
You are given a 0-indexed string word, consisting of lowercase English letters. You need to select one index and remove the letter at that index from word so that the frequency of every letter present in word is equal.

Return true if it is possible to remove one letter so that the frequency of all letters in word are equal, and false otherwise.

Note:

- The frequency of a letter x is the number of times it occurs in the string.
- You must remove exactly one letter and cannot choose to do nothing.
*/

/**
 * @param {string} word
 * @returns {boolean}
 */

// O(n) time | O(n) space - where n is the length of the word
function equalFrequency(word) {
  const map = new Map()

  // 1. Count the frequency of each character
  for (const char of word) {
    map.set(char, (map.get(char) || 0) + 1)
  }

  // 2. Remove each character and check if all frequencies are equal
  for (const char of word) {
    map.set(char, map.get(char) - 1)

    // If frequency becomes 0, remove the key
    if (map.get(char) === 0) map.delete(char)

    // Check if all remaining frequencies are equal
    if (new Set(map.values()).size === 1) return true

    // Reset the frequency by adding 1
    map.set(char, (map.get(char) || 0) + 1)
  }

  return false
}

// -----------------------------
// SOLUTION 2

// TIP: This solution uses an object instead of a Map

function equalFrequency2(word) {
  const map = {}

  // Count the frequency of each character
  for (const char of word) {
    map[char] = (map[char] || 0) + 1
  }

  // Remove each character and check if all frequencies are equal
  for (const char of word) {
    // Remove the character if it's the last one
    const freq = map[char] - 1
    if (freq) map[char] = freq
    else delete map[char]

    // Check if all remaining frequencies are equal after removing the character
    if (new Set(Object.values(map)).size === 1) return true

    // Reset the frequency by adding 1
    map[char] = freq + 1
  }

  return false
}

// -----------------------------
// TESTS

// 1
console.log(equalFrequency('abcc')) // true
// Explanation: Select index 3 and delete it: word becomes "abc" and each character has a frequency of 1.
console.log(equalFrequency('aazz')) // false
// Explanation: We must delete a character, so either the frequency of "a" is 1 and the frequency of "z" is 2, or vice versa. It is impossible to make all present letters have equal frequency.
console.log(equalFrequency('ab')) // false
console.log(equalFrequency('bac')) // true

// 2
console.log(equalFrequency2('abcc')) // true
console.log(equalFrequency2('aazz')) // false
console.log(equalFrequency2('ab')) // false
console.log(equalFrequency2('bac')) // true
