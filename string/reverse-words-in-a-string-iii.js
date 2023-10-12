/**
 * Given a string s, reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order
 *
 * @param {string} s
 * @returns {string}
 */

// O(n) time - O(n) space
function reverseWords(s) {
  let result = []
  let word = ''

  for (let i = s.length - 1; i >= 0; i--) {
    let char = s[i]

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

function reverseWords2(s) {
  return s
    .split(' ') // split string into array of words
    .filter((word) => word) // remove empty strings
    .map((word) => word.split('').reverse().join('')) // reverse each word
    .join(' ')
    .trim()
}

// -------------------------
// TESTS

console.log(reverseWords('the sky is blue')) // 'eht yks si eulb'
console.log(reverseWords('  hello world  ')) // '  olleh dlrow  '
console.log(reverseWords('a good   example')) // 'a doog   elpmaxe'

console.log(reverseWords2('the sky is blue')) // 'eht yks si eulb'
console.log(reverseWords2('  hello world  ')) // '  olleh dlrow  '
console.log(reverseWords2('a good   example')) // 'a doog   elpmaxe'
