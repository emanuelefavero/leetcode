// * Given two strings s and t, determine if they are isomorphic

/*
TIP: Two strings s and t are isomorphic if the characters in s can be replaced to get t

All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself

EXAMPLE:

s = egg, t = add
e -> a
g -> d
TRUE

s = foo, t = bar
f -> b
o -> a
r ?
FALSE
*/

/**
 * @param {string} s
 * @param {string} t
 * @returns {boolean}
 */

// O(n) time | O(n) space
function isIsomorphic(s, t) {
  let hashTable = new Map()
  let hashTable2 = new Map()

  for (let i = 0; i < s.length; i++) {
    // fill the hash tables with the characters of the strings
    if (!hashTable.has(s[i])) hashTable.set(s[i], t[i])
    if (!hashTable2.has(t[i])) hashTable2.set(t[i], s[i])

    // check if any of the characters are already mapped to a different character
    if (hashTable.get(s[i]) !== t[i] || hashTable2.get(t[i]) !== s[i])
      return false
  }

  return true
}

// -------------------------------
// TESTS

console.log(isIsomorphic('egg', 'add')) // true
console.log(isIsomorphic('foo', 'bar')) // false
console.log(isIsomorphic('badc', 'baba')) // false
