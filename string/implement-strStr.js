/**
 * * Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack
 *
 * @param {string} haystack
 * @param {string} needle
 * @returns {number}
 */

// O(n * m) time - O(1) space
function strStr(haystack, needle) {
  for (let i = 0; i < haystack.length; i++) {
    if (haystack[i] === needle[0]) {
      let j = 0
      while (j < needle.length && haystack[i + j] === needle[j]) {
        j++

        // ? haystack[i + j] === needle[j] - check if the next character in haystack is equal to the next character in needle
      }

      if (j === needle.length) return i
    }
  }

  return -1
}

// -------------------------
// SOLUTION 2

// TIP: This solution uses JavaScript built in methods

// O(n) time - O(1) space
function strStr2(haystack, needle) {
  return haystack.indexOf(needle)
}

// -------------------------
// SOLUTION 3

// O(n * m) time - O(1) space
function strStr3(haystack, needle) {
  for (let i = 0; i < haystack.length; i++) {
    if (
      haystack[i] === needle[0] &&
      haystack.slice(i, i + needle.length) === needle
    )
      return i
  }

  return -1
}

// -------------------------
// TESTS

console.log(strStr('sadbutsad', 'sad')) // 0
console.log(strStr('sadbutsad', 'but')) // 3
console.log(strStr('leetcode', 'leto')) // -1

console.log(strStr2('sadbutsad', 'sad')) // 0
console.log(strStr2('sadbutsad', 'but')) // 3
console.log(strStr2('leetcode', 'leto')) // -1

console.log(strStr3('sadbutsad', 'sad')) // 0
console.log(strStr3('sadbutsad', 'but')) // 3
console.log(strStr3('leetcode', 'leto')) // -1
