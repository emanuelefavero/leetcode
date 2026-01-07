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
// SOLUTION 3

// TIP: This is a two-pointer approach to reverse the substring in place

function reversePrefix3(s, k) {
  let left = 0
  let right = k - 1

  s = s.split('')

  while (left < right) {
    const temp = s[left]
    s[left] = s[right]
    s[right] = temp

    left++
    right--
  }

  return s.join('')
}

// -------------------------
// SOLUTION 4

// TIP: This is a variation of solution 1 that builds the reversed substring differently

function reversePrefix4(s, k) {
  let reversed = ''

  for (let i = 0; i < k; i++) {
    reversed = s[i] + reversed
  }

  return reversed + s.slice(k)
}

// -------------------------
// TESTS

// 1
console.log(reversePrefix('abcd', 2)) // bacd
// Explanation:​​​​​​​ The first k = 2 characters "ab" are reversed to "ba". The final resulting string is "bacd".
console.log(reversePrefix('xyz', 3)) // zyx
console.log(reversePrefix('hey', 1)) // hey

// 2
console.log(reversePrefix2('abcd', 2)) // bacd
console.log(reversePrefix2('xyz', 3)) // zyx
console.log(reversePrefix2('hey', 1)) // hey

// 3
console.log(reversePrefix3('abcd', 2)) // bacd
console.log(reversePrefix3('xyz', 3)) // zyx
console.log(reversePrefix3('hey', 1)) // hey

// 4
console.log(reversePrefix4('abcd', 2)) // bacd
console.log(reversePrefix4('xyz', 3)) // zyx
console.log(reversePrefix4('hey', 1)) // hey
