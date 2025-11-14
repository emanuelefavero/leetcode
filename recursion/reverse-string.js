/**
 * * Reverse String
 *
 * Write a function that reverses a string. The input string is given as an array of characters s
 *
 * You must do this by modifying the input array in-place with O(1) extra memory
 *
 * @param {string[]} s
 * @returns {string[]}
 */

// TIP: This solution uses recursion

// O(n) time | O(n) space
function reverseString(s) {
  if (s.length === 0) return s

  const last = s.pop()

  reverseString(s)

  s.unshift(last)

  return s
}

// ---------------------
// SOLUTION 2

// TIP: This solution does not use recursion

// O(n) time | O(1) space
function reverseString2(s) {
  let left = 0
  let right = s.length - 1

  while (left < right) {
    ;[s[left], s[right]] = [s[right], s[left]] // swap

    left++
    right--
  }
}

// ---------------------
// TESTS

// 1
console.log(reverseString(['h', 'e', 'l', 'l', 'o']))
// ['o', 'l', 'l', 'e', 'H']

// 2
console.log(reverseString(['h', 'e', 'l', 'l', 'o']))
// ['o', 'l', 'l', 'e', 'H']
