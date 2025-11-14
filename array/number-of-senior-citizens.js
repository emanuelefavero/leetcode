// * Number of Senior Citizens

/*
You are given a 0-indexed array of strings details. Each element of details provides information about a given passenger compressed into a string of length 15. The system is such that:

- The first ten characters consist of the phone number of passengers.
- The next character denotes the gender of the person.
- The following two characters are used to indicate the age of the person.
- The last two characters determine the seat allotted to that person.

Return the number of passengers who are strictly more than 60 years old.
*/

/**
 * @param {string[]} details
 * @returns {number}
 */

// O(n) time | O(1) space
function countSeniors(details) {
  let count = 0

  for (const d of details) {
    const age = parseInt(d[11] + d[12])
    if (age > 60) count++
  }

  return count
}

// -------------------------
// SOLUTION 2

// TIP: Use the unary plus operator to convert a string to a number.

function countSeniors2(details) {
  let count = 0

  for (const d of details) {
    const age = +(d[11] + d[12])
    count += age > 60
  }

  return count
}

// -------------------------
// SOLUTION 3

// TIP: Use the filter method to filter the elements that meet the condition. This also seems to be faster than the previous solutions

function countSeniors3(details) {
  return details.filter((d) => +(d[11] + d[12]) > 60).length
}

// -------------------------
// TESTS

// 1
console.log(
  countSeniors(['7868190130M7522', '5303914400F9211', '9273338290F4010'])
) // 2
// Explanation: The passengers at indices 0, 1, and 2 have ages 75, 92, and 40. Thus, there are 2 people who are over 60 years old.

// 2
console.log(
  countSeniors2(['7868190130M7522', '5303914400F9211', '9273338290F4010'])
) // 2

// 3
console.log(
  countSeniors3(['7868190130M7522', '5303914400F9211', '9273338290F4010'])
) // 2
