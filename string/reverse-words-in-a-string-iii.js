/**
 * * Given a string s, reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order
 *
 * @param {string} s
 * @returns {string}
 */

// O(n) time - O(n) space
function reverseWords(s) {
  const result = []
  let word = ''

  for (let i = s.length - 1; i >= 0; i--) {
    const char = s[i]

    if (char !== ' ') {
      word += char
    } else if (word) {
      result.push(word)
      word = ''
    }
  }

  result.push(word)

  return result.reverse().join(' ').trim()
}

// -------------------------
// SOLUTION 2

// TIP: This solution uses JavaScript built in methods

// O(n) time - O(n) space
function reverseWords2(s) {
  return s
    .split(' ') // split string into array of words
    .filter((word) => word) // remove empty strings
    .map((word) => word.split('').reverse().join('')) // reverse each word
    .join(' ')
    .trim()
}

// -------------------------
// SOLUTION 3

// O(n) time - O(n) space
function reverseWords3(s) {
  const words = s.split(' ') // split string into array of words

  // loop through the array and reverse each word
  for (let i = 0; i < words.length; i++) {
    words[i] = words[i].split('').reverse().join('')
  }

  return words.join(' ')
}

// -------------------------
// TESTS

console.log(reverseWords('the sky is blue')) // 'eht yks si eulb'
console.log(reverseWords2('  hello world  ')) // '  olleh dlrow  '
console.log(reverseWords3('a good   example')) // 'a doog   elpmaxe'
