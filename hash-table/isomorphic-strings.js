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

function isIsomorphic(s, t) {}

// -------------------------------
// TESTS

console.log(isIsomorphic('egg', 'add')) // true
console.log(isIsomorphic('foo', 'bar')) // false
