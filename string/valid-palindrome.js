// * Valid Palindrome

// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

// Given a string s, return true if it is a palindrome, or false otherwise.

function isPalindrome(s) {
  const string = s.toLowerCase().replace(/[^a-z0-9]/g, '')

  let left = 0
  let right = string.length - 1

  while (left < right) {
    if (string[left] !== string[right]) return false

    left++
    right--
  }

  return true
}

// -------------------------
// TESTS

console.log(isPalindrome('A man, a plan, a canal: Panama')) // true
console.log(isPalindrome('race a car')) // false
console.log(isPalindrome('')) // true
