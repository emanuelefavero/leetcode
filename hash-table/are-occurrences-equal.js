// * Check if All Characters Have Equal Number of Occurrences

// Given a string s, return true if s is a good string, or false otherwise.

// A string s is good if all the characters that appear in s have the same number of occurrences (i.e., the same frequency).

function areOccurrencesEqual(s) {
  let map = new Map()

  for (let char of s) {
    map.set(char, map.get(char) + 1 || 1)
  }

  let firstValue = map.get(s[0])
  for (let [key, value] of map) {
    if (firstValue !== value) return false
  }

  return true
}

// -----------------------------
// TESTS

console.log(areOccurrencesEqual('abacbc')) // true
// Explanation: The characters that appear in s are 'a', 'b', and 'c'. All characters occur 2 times in s.

console.log(areOccurrencesEqual('aaabb')) // false
