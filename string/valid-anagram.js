// * Valid Anagram

/*
Given two strings s and t, return true if t is an anagram of s, and false otherwise.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.
*/

function isAnagram(s, t) {
  if (s.length !== t.length) return false
  let sSorted = s.split('').sort().join('')
  let tSorted = t.split('').sort().join('')

  return sSorted === tSorted
}

// -------------------------
// SOLUTION 2

function isAnagram2(s, t) {
  if (s.length !== t.length) return false

  let map = {}

  for (let char of s) {
    map[char] = map[char] + 1 || 1
  }

  for (let char of t) {
    if (!map[char] || map[char] === 0) return false
    map[char]--
  }

  return true
}

// -------------------------
// TESTS

// 1
console.log(isAnagram('anagram', 'nagaram')) // true
console.log(isAnagram('rat', 'car')) // false

// 2
console.log(isAnagram2('anagram', 'nagaram')) // true
console.log(isAnagram2('rat', 'car')) // false
