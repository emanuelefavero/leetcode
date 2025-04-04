// * Convert Date to Binary

/*
You are given a string date representing a Gregorian calendar date in the yyyy-mm-dd format.

date can be written in its binary representation obtained by converting year, month, and day to their binary representations without any leading zeroes and writing them down in year-month-day format.

Return the binary representation of date.
*/

function convertDateToBinary(date) {
  let year = Number(date.substring(0, 4)).toString(2)
  let month = Number(date.substring(5, 7)).toString(2)
  let day = Number(date.substring(8, 10)).toString(2)
  return `${year}-${month}-${day}`
}

// -------------------------
// TESTS

console.log(convertDateToBinary('2080-02-29')) // "100000100000-10-11101"
// Explanation: 100000100000, 10, and 11101 are the binary representations of 2080, 02, and 29 respectively.
