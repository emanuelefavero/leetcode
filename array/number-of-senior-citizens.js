// * Number of Senior Citizens

/*
You are given a 0-indexed array of strings details. Each element of details provides information about a given passenger compressed into a string of length 15. The system is such that:

- The first ten characters consist of the phone number of passengers.
- The next character denotes the gender of the person.
- The following two characters are used to indicate the age of the person.
- The last two characters determine the seat allotted to that person.

Return the number of passengers who are strictly more than 60 years old.
*/

function countSeniors(details) {
  let count = 0

  for (let d of details) {
    let age = parseInt(d[11] + d[12])
    if (age > 60) count++
  }

  return count
}

// -------------------------
// SOLUTION 2

function countSeniors2(details) {
  let count = 0

  for (let d of details) {
    let age = +(d[11] + d[12])
    count += age > 60
  }

  return count
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
