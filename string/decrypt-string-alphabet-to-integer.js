// * Decrypt String from Alphabet to Integer Mapping

/*
You are given a string s formed by digits and '#'. We want to map s to English lowercase characters as follows:

- Characters ('a' to 'i') are represented by ('1' to '9') respectively.
- Characters ('j' to 'z') are represented by ('10#' to '26#') respectively.

Return the string formed after mapping.

The test cases are generated so that a unique mapping will always exist.
*/

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
// TESTS

console.log(freqAlphabets('10#11#12')) // jkab
console.log(freqAlphabets('1326#')) // acz
