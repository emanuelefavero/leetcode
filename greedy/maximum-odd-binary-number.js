// * Maximum Odd Binary Number

/*
You are given a binary string s that contains at least one '1'.

You have to rearrange the bits in such a way that the resulting binary number is the maximum odd binary number that can be created from this combination.

Return a string representing the maximum odd binary number that can be created from the given combination.

Note that the resulting string can have leading zeros.
*/

// TIP: We need to put all ones to the left and all zeros to the right except one 1 at the end (e.g. 110001)

/**
 * @param {string} s
 * @returns {string}
 */

// O(n) time | O(1) space
function maximumOddBinaryNumber(s) {
  let count1 = 0
  let count0 = 0

  for (let char of s) {
    if (char === '1') count1++
    else if (char === '0') count0++
  }

  return '1'.repeat(count1 - 1) + '0'.repeat(count0) + '1'
}

// -----------------------------
// TESTS

// 1
console.log(maximumOddBinaryNumber('010'))
console.log(maximumOddBinaryNumber('0101'))
