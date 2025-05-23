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

  // Populate the map with the frequency of each character
  for (let char of s) {
    map.set(char, (map.get(char) || 0) + 1)
  }

  // Find the maximum frequency of vowels and consonants
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
// SOLUTION 2

// TIP: This solution uses two maps to store the frequency of vowels and consonants separately.

function maxFreqSum2(s) {
  let vowelMap = { a: 0, e: 0, i: 0, o: 0, u: 0 }
  let consonantMap = {}

  // Populate the consonantMap with all consonants initialized to 0
  'bcdfghjklmnpqrstvwxyz'.split('').forEach((char) => {
    consonantMap[char] = 0
  })

  // Count the frequency of vowels and consonants
  for (let char of s) {
    if (vowelMap.hasOwnProperty(char)) {
      vowelMap[char]++
    } else if (consonantMap.hasOwnProperty(char)) {
      consonantMap[char]++
    }
  }

  // Find the maximum frequency of vowels and consonants
  let maxVowel = Math.max(...Object.values(vowelMap))
  let maxConsonant = Math.max(...Object.values(consonantMap))

  return maxVowel + maxConsonant
}

// -------------------------
// SOLUTION 3

// TIP: This solution is similar to the first one but uses arrays and a different style for finding the maximum frequency.

function maxFreqSum3(s) {
  let vowels = ['a', 'e', 'i', 'o', 'u']
  let consonants = [
    'b',
    'c',
    'd',
    'f',
    'g',
    'h',
    'j',
    'k',
    'l',
    'm',
    'n',
    'p',
    'q',
    'r',
    's',
    't',
    'v',
    'w',
    'x',
    'y',
    'z',
  ]
  let map = new Map()

  // Populate the map with the frequency of each character
  for (let char of s) {
    map.set(char, (map.get(char) || 0) + 1)
  }

  // Find the maximum frequency of vowels and consonants
  let maxVowel = Math.max(...vowels.map((char) => map.get(char) || 0))
  let maxConsonant = Math.max(...consonants.map((char) => map.get(char) || 0))

  return maxVowel + maxConsonant
}

// -------------------------
// TESTS

// 1
console.log(maxFreqSum('successes')) // 6
/*
Explanation:

The vowels are: 'u' (frequency 1), 'e' (frequency 2). The maximum frequency is 2.
The consonants are: 's' (frequency 4), 'c' (frequency 2). The maximum frequency is 4.
The output is 2 + 4 = 6.
*/

// 2
console.log(maxFreqSum2('successes')) // 6

// 3
console.log(maxFreqSum3('successes')) // 6
