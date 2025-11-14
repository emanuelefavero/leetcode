// * Maximum Number of Words You Can Type

/*
There is a malfunctioning keyboard where some letter keys do not work. All other keys on the keyboard work properly.

Given a string text of words separated by a single space (no leading or trailing spaces) and a string brokenLetters of all distinct letter keys that are broken, return the number of words in text you can fully type using this keyboard.
*/

/**
 * @param {string} text
 * @param {string} brokenLetters
 * @returns {number}
 */

// O(n * m) time | O(k) space - where n is the number of words in text, m is the average length of each word, and k is the length of brokenLetters
function canBeTypedWords(text, brokenLetters) {
  const set = new Set([...brokenLetters])
  const words = text.split(' ')
  let length = 0

  for (const word of words) {
    let hasBrokenLetter = false

    for (const char of word) {
      if (set.has(char)) {
        hasBrokenLetter = true
        break
      }
    }

    if (!hasBrokenLetter) length++
  }

  return length
}

// -----------------------------
// SOLUTION 2

// TIP: This solution uses an hash-table instead of a set and counts the total number of words and then subtracts the words that contain broken letters

function canBeTypedWords2(text, brokenLetters) {
  const map = {}
  for (const char of brokenLetters) {
    map[char] = true
  }

  const words = text.split(' ')
  let length = words.length

  for (const word of words) {
    let hasBrokenLetter = false

    for (const char of word) {
      if (map[char] === true) {
        hasBrokenLetter = true
        break
      }
    }

    if (hasBrokenLetter) length--
  }

  return length
}

// -----------------------------
// TESTS

// 1
console.log(canBeTypedWords('hello world', 'ad')) // 1
console.log(canBeTypedWords('leet code', 'lt')) // 1
console.log(canBeTypedWords('leet code', 'e')) // 0

// 2
console.log(canBeTypedWords2('hello world', 'ad')) // 1
console.log(canBeTypedWords2('leet code', 'lt')) // 1
console.log(canBeTypedWords2('leet code', 'e')) // 0
