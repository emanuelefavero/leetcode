// * Convert Date to Binary

/*
You are given a string date representing a Gregorian calendar date in the yyyy-mm-dd format.

date can be written in its binary representation obtained by converting year, month, and day to their binary representations without any leading zeroes and writing them down in year-month-day format.

Return the binary representation of date.
*/

/**
 * @param {string} date
 * @returns {string}
 */

// TIP: Since we already know the structure of the date string, we can use the substring method to get the year, month, and day

// O(n) time | O(1) space
function convertDateToBinary(date) {
  const year = Number(date.substring(0, 4)).toString(2)
  const month = Number(date.substring(5, 7)).toString(2)
  const day = Number(date.substring(8, 10)).toString(2)
  return `${year}-${month}-${day}`
}

// -------------------------
// SOLUTION 2

// TIP: We can also use the split method to get the year, month, and day

function convertDateToBinary2(date) {
  const array = date.split('-')
  const result = array.map((num) => parseInt(num).toString(2))
  return result.join('-')
}

// -------------------------
// TESTS

// 1
console.log(convertDateToBinary('2080-02-29')) // "100000100000-10-11101"
// Explanation: 100000100000, 10, and 11101 are the binary representations of 2080, 02, and 29 respectively.

// 2
console.log(convertDateToBinary2('2080-02-29')) // "100000100000-10-11101"
