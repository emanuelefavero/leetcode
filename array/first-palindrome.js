// * Find First Palindromic String in the Array

/*
Given an array of strings words, return the first palindromic string in the array. If there is no such string, return an empty string "".

A string is palindromic if it reads the same forward and backward.
*/

function firstPalindrome(words) {
  for (let i = 0; i < words.length; i++) {
    let word = words[i]
    let reversed = ''

    for (let j = word.length - 1; j >= 0; j--) {
      reversed += word[j]
    }

    if (reversed === word) return word
  }

  return ''
}

// -------------------------
// TESTS

console.log(firstPalindrome(['abc', 'car', 'ada', 'racecar', 'cool'])) // ada
// Explanation: The first string that is palindromic is "ada".
// Note that "racecar" is also palindromic, but it is not the first.

console.log(firstPalindrome(['car', 'cool'])) // ''
