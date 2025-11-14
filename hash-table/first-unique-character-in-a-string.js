/**
 * * Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1
 *
 * @param {string} s
 * @returns {number}
 */

// O(n) time | O(n) space
function firstUniqChar(s) {
  const map = new Map()

  for (let i = 0; i < s.length; i++) {
    if (!map.has(s[i])) map.set(s[i], 1)
    else map.set(s[i], map.get(s[i]) + 1)
  }

  for (let i = 0; i < s.length; i++) {
    if (map.get(s[i]) < 2) return i
  }

  return -1
}

// -------------------------------
// SOLUTION 2

// TIP: This solution uses indexOf and lastIndexOf to check if the current character is unique (it uses less space but could be a bit harder to understand)

function firstUniqChar2(s) {
  for (let i = 0; i < s.length; i++) {
    // check if the index of the current character is the same as the last index of the current character
    // TIP: If the index is different, it means the character is repeated and it's not unique
    if (s.indexOf(s[i]) === s.lastIndexOf(s[i])) return i
  }

  return -1
}

// -------------------------------
// TESTS

// Solution 1
console.log(firstUniqChar('aabbc')) // 4
console.log(firstUniqChar('aabb')) // -1

// Solution 2
console.log(firstUniqChar2('aabbc')) // 4
console.log(firstUniqChar2('aabb')) // -1
