// * Is Subsequence

// Given two strings s and t, return true if s is a subsequence of t, or false otherwise.

// A subsequence of a string is a new string that is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (i.e., "ace" is a subsequence of "abcde" while "aec" is not).

// TIP: This solution uses two pointers to iterate over the strings and compare the characters. At the end of the loop, if the first pointer is equal to the length of the first string, it means that all the characters were found in the second string in the same order

function isSubsequence(s, t) {
  let i = 0
  let j = 0

  while (i < s.length && j < t.length) {
    if (s[i] === t[j]) {
      i++ // Only increment the first pointer if the characters are equal
    }

    j++ // Always increment the second pointer
  }

  return i === s.length
}

// -----------------------------
// TESTS

console.log(isSubsequence('abc', 'ahbgdc')) // true
// Explanation: s is "abc", while t contains "a", "b", "c" and "d" in order
console.log(isSubsequence('axc', 'ahbgdc')) // false
// Explanation: s is "axc", while t contains "a", "b", "c" and "d" but not in order
