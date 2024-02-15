// * Is Subsequence

// Given two strings s and t, return true if s is a subsequence of t, or false otherwise.

// A subsequence of a string is a new string that is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (i.e., "ace" is a subsequence of "abcde" while "aec" is not).

// TODO write solution

function isSubsequence(s, t) {}

// -----------------------------
// TESTS

console.log(isSubsequence('abc', 'ahbgdc')) // true
// Explanation: s is "abc", while t contains "a", "b", "c" and "d" in order
console.log(isSubsequence('axc', 'ahbgdc')) // false
// Explanation: s is "axc", while t contains "a", "b", "c" and "d" but not in order
