// * Count the Number of Consistent Strings

/*
You are given a string allowed consisting of distinct characters and an array of strings words. A string is consistent if all characters in the string appear in the string allowed.

Return the number of consistent strings in the array words.
*/

function countConsistentStrings(allowed, words) {
  const hash = {}
  for (let char of allowed) hash[char] = true

  let count = 0

  for (const word of words) {
    let sameChars = true

    for (const char of word) {
      if (!hash[char]) {
        sameChars = false
        break
      }
    }

    if (sameChars) count++
  }

  return count
}

// -----------------------------
// TESTS

console.log(countConsistentStrings('ab', ['ad', 'bd', 'aaab', 'baa', 'badab'])) // 2

console.log(
  countConsistentStrings('abc', ['a', 'b', 'c', 'ab', 'ac', 'bc', 'abc'])
) // 7
