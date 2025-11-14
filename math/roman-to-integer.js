// * Roman to Integer

/*
Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000
For example, 2 is written as II in Roman numeral, just two ones added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

I can be placed before V (5) and X (10) to make 4 and 9. 
X can be placed before L (50) and C (100) to make 40 and 90. 
C can be placed before D (500) and M (1000) to make 400 and 900.

Given a roman numeral, convert it to an integer.
*/

/**
 * @param {string} s
 * @returns {number}
 */

// O(n) time | O(1) space
function romanToInt(s) {
  const map = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  }
  let result = 0

  for (let i = 0; i < s.length; i++) {
    const current = map[s[i]]
    const next = map[s[i + 1]]

    if (current < next) {
      result += next - current
      i++
    } else result += current
  }

  return result
}

// -------------------------
// TESTS

console.log(romanToInt('III')) // 3, III = 3
console.log(romanToInt('LVIII')) // 58, L = 50, V= 5, III = 3
console.log(romanToInt('MCMXCIV'))
// 1994, M = 1000, CM = 900, XC = 90 and IV = 4
