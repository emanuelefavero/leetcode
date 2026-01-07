// * Reverse String Prefix

// You are given a string s and an integer k.

// Reverse the first k characters of s and return the resulting string.

/**
 * @param {string} s
 * @param {number} k
 * @returns {string}
 */

// O(n) time | O(n) space
function reversePrefix(s, k) {
  let reversed = ''

  for (let i = k - 1; i >= 0; i--) {
    reversed += s[i]
  }

  return reversed + s.slice(k)
}

// -------------------------
// SOLUTION 2

// TIP: This solution uses built-in methods to reverse the substring

function reversePrefix2(s, k) {
  let reversed = s.substring(0, k).split('').reverse().join('')
  let normal = s.substring(k)
  return reversed + normal
}

// -------------------------
// TESTS

// 1
console.log(reversePrefix('abcd', 2)) // bacd
// Explanation:​​​​​​​ The first k = 2 characters "ab" are reversed to "ba". The final resulting string is "bacd".
console.log(reversePrefix('xyz', 3)) // zyx
console.log(reversePrefix('hey', 1)) // hey

// 2
console.log(reversePrefix('abcd', 2)) // bacd
console.log(reversePrefix('xyz', 3)) // zyx
console.log(reversePrefix('hey', 1)) // hey
