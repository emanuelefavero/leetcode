// * Generate a String With Characters That Have Odd Counts

// Given an integer n, return a string with n characters such that each character in such string occurs an odd number of times.

// The returned string must contain only lowercase English letters. If there are multiples valid strings, return any of them.

/**
 * @param {number} n
 * @returns {string}
 */

// O(n) time | O(1) space
function generateTheString(n) {
  let result = ''

  for (let i = 0; i < n - 1; i++) {
    result += 'a'
  }

  if (n % 2 === 0) {
    result += 'b'
  } else result += 'a'

  return result
}

// -------------------------
// SOLUTION 2

// TIP: We can use the repeat method to repeat a string n times

function generateTheString2(n) {
  if (n % 2 === 0) {
    return 'a'.repeat(n - 1) + 'b'
  } else return 'a'.repeat(n)
}

// -------------------------
// TESTS

// 1
console.log(generateTheString(4)) // aaab
console.log(generateTheString(2)) // ab
console.log(generateTheString(3)) // aaa
console.log(generateTheString(1)) // a

// Explanation: "aaab" is a valid string since the character 'a' occurs three times and the character 'b' occurs once. Note that there are many other valid strings such as "ohhh" and "love".

// 2
console.log(generateTheString2(4)) // aaab
console.log(generateTheString2(2)) // ab
console.log(generateTheString2(3)) // aaa
console.log(generateTheString2(1)) // a
