// * Maximum 69 Number

/*
You are given a positive integer num consisting only of digits 6 and 9.

Return the maximum number you can get by changing at most one digit (6 becomes 9, and 9 becomes 6).
*/

/**
 *
 * @param {number} num
 * @returns {number}
 */

// O(n) time | O(n) space
function maximum69Number(num) {
  num = String(num).split('')

  for (let i = 0; i < num.length; i++) {
    if (num[i] === '6') {
      num[i] = '9'
      break
    }
  }

  return Number(num.join(''))
}

// -----------------------------
// TESTS

console.log(maximum69Number(9669)) // 9969
console.log(maximum69Number(9996)) // 9999
