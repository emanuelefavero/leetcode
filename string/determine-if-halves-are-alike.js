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
// TESTS

console.log(halvesAreAlike('book')) // true
console.log(halvesAreAlike('textbook')) // false
