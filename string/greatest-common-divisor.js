// * Greatest Common Divisor of Strings

/*
For two strings s and t, we say "t divides s" if and only if s = t + t + t + ... + t + t (i.e., t is concatenated with itself one or more times).

Given two strings str1 and str2, return the largest string x such that x divides both str1 and str2.
*/

/**
 * @param {string} str1
 * @param {string} str2
 * @returns {string}
 */

// O(n) time | O(1) space
function gcdOfStrings(str1, str2) {
  if (str1 + str2 !== str2 + str1) return ''

  let a = str1.length
  let b = str2.length

  // Euclidean algorithm @see https://en.wikipedia.org/wiki/Euclidean_algorithm
  while (b) {
    let temp = b
    b = a % b // remainder of a divided by b
    a = temp
  }

  return str1.substring(0, a)
}

// -------------------------
// TESTS

console.log(gcdOfStrings('ABCABC', 'ABC')) // 'ABC'
console.log(gcdOfStrings('ABABAB', 'ABAB')) // 'AB'
console.log(gcdOfStrings('LEET', 'CODE')) // ''
