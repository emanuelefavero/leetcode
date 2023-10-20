// Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1

function firstUniqChar(s) {
  let map = new Map()

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
// TESTS

console.log(firstUniqChar('aabbc')) // 4
console.log(firstUniqChar('aabb')) // -1
