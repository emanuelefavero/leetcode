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
// SOLUTION 2

// TIP: Use a set to check if all the values are the same

function areOccurrencesEqual2(s) {
  let map = new Map()

  for (let i = 0; i < s.length; i++) {
    map.set(s[i], map.get(s[i]) + 1 || 1)
  }

  // ? If all the values are the same, the set will have a size of 1
  return new Set(map.values()).size === 1
}

// -----------------------------
// TESTS

// 1
console.log(areOccurrencesEqual('abacbc')) // true
// Explanation: The characters that appear in s are 'a', 'b', and 'c'. All characters occur 2 times in s.
console.log(areOccurrencesEqual('aaabb')) // false

// 2
console.log(areOccurrencesEqual2('abacbc')) // true
console.log(areOccurrencesEqual2('aaabb')) // false
