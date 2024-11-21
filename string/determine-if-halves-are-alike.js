// * Determine if String Halves Are Alike

/*
You are given a string s of even length. Split this string into two halves of equal lengths, and let a be the first half and b be the second half.

Two strings are alike if they have the same number of vowels ('a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'). Notice that s contains uppercase and lowercase letters.

Return true if a and b are alike. Otherwise, return false.
*/

function halvesAreAlike(s) {
  let vowels = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'])
  let half = s.length / 2
  let a = s.slice(0, half)
  let b = s.slice(half)

  let aCount = 0
  for (let char of a) {
    if (vowels.has(char)) aCount++
  }

  let bCount = 0
  for (let char of b) {
    if (vowels.has(char)) bCount++
  }

  return aCount === bCount
}

// -------------------------
// SOLUTION 2

// TIP: You can use two pointers to iterate through the string from both ends at the same time.
// TIP: You can also use a string of vowels instead of a set to check if a character is a vowel

function halvesAreAlike2(s) {
  let count = 0
  let vowels = 'aeiouAEIOU'
  let left = 0
  let right = s.length - 1

  while (left < right) {
    if (vowels.includes(s[left])) count++
    if (vowels.includes(s[right])) count--

    left++
    right--
  }

  return count === 0
}

// -------------------------
// TESTS

// 1
console.log(halvesAreAlike('book')) // true
console.log(halvesAreAlike('textbook')) // false

// 2
console.log(halvesAreAlike2('book')) // true
console.log(halvesAreAlike2('textbook')) // false
