// * Decrypt String from Alphabet to Integer Mapping

/*
You are given a string s formed by digits and '#'. We want to map s to English lowercase characters as follows:

- Characters ('a' to 'i') are represented by ('1' to '9') respectively.
- Characters ('j' to 'z') are represented by ('10#' to '26#') respectively.

Return the string formed after mapping.

The test cases are generated so that a unique mapping will always exist.
*/

/**
 * @param {string} s
 * @returns {string}
 */

// O(n) time | O(1) space
function freqAlphabets(s) {
  let map = {
    1: 'a',
    2: 'b',
    3: 'c',
    4: 'd',
    5: 'e',
    6: 'f',
    7: 'g',
    8: 'h',
    9: 'i',
    '10#': 'j',
    '11#': 'k',
    '12#': 'l',
    '13#': 'm',
    '14#': 'n',
    '15#': 'o',
    '16#': 'p',
    '17#': 'q',
    '18#': 'r',
    '19#': 's',
    '20#': 't',
    '21#': 'u',
    '22#': 'v',
    '23#': 'w',
    '24#': 'x',
    '25#': 'y',
    '26#': 'z',
  }

  let count = 0
  let result = ''

  while (count < s.length) {
    if (s[count + 2] === '#') {
      let value = s[count] + s[count + 1] + s[count + 2]
      result += map[value]
      count += 3
    } else {
      result += map[s[count]]
      count++
    }
  }

  return result
}

// -------------------------
// SOLUTION 2

// TIP: There is no need to create a map object. You can use the ASCII table to get the correct character from the number.
// TIP: Use String.fromCharCode() to convert a number to a character and 96 to get the correct character from the ASCII table.

function freqAlphabets2(s) {
  let result = ''
  let i = 0

  while (i < s.length) {
    if (i + 2 < s.length && s[i + 2] === '#') {
      let num = parseInt(s.substring(i, i + 2))

      result += String.fromCharCode(num + 96)
      i += 3
    } else {
      let num = parseInt(s[i])
      result += String.fromCharCode(num + 96)
      i++
    }
  }

  return result
}

// -------------------------
// SOLUTION 3

// TIP: You can use regular expressions to solve this problem.
// TIP: Use the replace method to replace the number with the correct character.
// TIP: While shorter, this solution is harder to understand.

function freqAlphabets3(s) {
  return s
    .replace(/(\d\d)#/g, (_, $1) => String.fromCharCode(+$1 + 96))
    .replace(/\d/g, (n) => String.fromCharCode(+n + 96))
}

// -------------------------
// TESTS

// 1
console.log(freqAlphabets('10#11#12')) // jkab
console.log(freqAlphabets('1326#')) // acz

// 2
console.log(freqAlphabets2('10#11#12')) // jkab
console.log(freqAlphabets2('1326#')) // acz

// 3
console.log(freqAlphabets3('10#11#12')) // jkab
console.log(freqAlphabets3('1326#')) // acz
