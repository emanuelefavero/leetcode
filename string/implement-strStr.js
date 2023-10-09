// Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack

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

console.log(strStr('sadbutsad', 'sad')) // 0
console.log(strStr('sadbutsad', 'but')) // 3
console.log(strStr('leetcode', 'leto')) // -1
