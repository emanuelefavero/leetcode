// * Find Most Frequent Vowel and Consonant

/*
You are given a string s consisting of lowercase English letters ('a' to 'z').

Your task is to:

Find the char (one of 'a', 'e', 'i', 'o', or 'u') with the maximum frequency.
Find the consonant (all other letters excluding vowels) with the maximum frequency.
Return the sum of the two frequencies.

Note: If multiple vowels or consonants have the same maximum frequency, you may choose any one of them. If there are no vowels or no consonants in the string, consider their frequency as 0.

The frequency of a letter x is the number of times it occurs in the string.
*/

/**
 * @param {string} s
 * @returns {number}
 */

// O(n) time | O(n) space
function maxFreqSum(s) {
  let vowels = 'aeiou'
  let consonant = 'bcdfghjklmnpqrstvwxyz'
  let map = new Map()

  for (let char of s) {
    map.set(char, (map.get(char) || 0) + 1)
  }

  let maxVowel = 0
  for (let char of vowels) {
    if (map.has(char)) {
      maxVowel = Math.max(maxVowel, map.get(char))
    }
  }

  let maxConsonant = 0
  for (let char of consonant) {
    if (map.has(char)) {
      maxConsonant = Math.max(maxConsonant, map.get(char))
    }
  }

  return maxVowel + maxConsonant
}

// -------------------------
// TESTS

console.log(maxFreqSum('successes')) // 6
/*
Explanation:

The vowels are: 'u' (frequency 1), 'e' (frequency 2). The maximum frequency is 2.
The consonants are: 's' (frequency 4), 'c' (frequency 2). The maximum frequency is 4.
The output is 2 + 4 = 6.
*/
