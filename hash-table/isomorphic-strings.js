// Given two strings s and t, determine if they are isomorphic.

// Two strings s and t are isomorphic if the characters in s can be replaced to get t.

// All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.

/*
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

function isIsomorphic(s, t) {
  let hashTable = new Map()
  let hashTable2 = new Map()

  for (let i = 0; i < s.length; i++) {
    if (!hashTable.has(s[i])) hashTable.set(s[i], t[i])
    if (!hashTable2.has(t[i])) hashTable2.set(t[i], s[i])

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
