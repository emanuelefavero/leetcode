// * Lexicographically Smallest Palindrome

/*
You are given a string s consisting of lowercase English letters, and you are allowed to perform operations on it. In one operation, you can replace a character in s with another lowercase English letter.

Your task is to make s a palindrome with the minimum number of operations possible. If there are multiple palindromes that can be made using the minimum number of operations, make the lexicographically smallest one.

A string a is lexicographically smaller than a string b (of the same length) if in the first position where a and b differ, string a has a letter that appears earlier in the alphabet than the corresponding letter in b.

Return the resulting palindrome string.
*/

function makeSmallestPalindrome(s) {
  let a = 0
  let b = s.length - 1

  let sArray = s.split('')

  while (a < b) {
    if (sArray[a] !== sArray[b]) {
      if (sArray[a] < sArray[b]) {
        sArray[b] = sArray[a]
      } else {
        sArray[a] = sArray[b]
      }
    }
    a++
    b--
  }

  return sArray.join('')
}

// -----------------------------
// TESTS

console.log(makeSmallestPalindrome('egcfe')) // 'efcfe'
// Explanation: The minimum number of operations to make "egcfe" a palindrome is 1, and the lexicographically smallest palindrome string we can get by modifying one character is "efcfe", by changing 'g'.

console.log(makeSmallestPalindrome('abcd')) // 'abba'
