// * Harshad Number

// An integer divisible by the sum of its digits is said to be a Harshad number. You are given an integer x. Return the sum of the digits of x if x is a Harshad number, otherwise, return -1.

/**
 * @param {number} x
 * @returns {number}
 */

// O(n) time | O(1) space
function sumOfTheDigitsOfHarshadNumber(x) {
  let sum = x
    .toString()
    .split('')
    .reduce((acc, curr) => acc + parseInt(curr), 0)

  return x % sum === 0 ? sum : -1
}

// -------------------------
// SOLUTION 2

// TIP: This solution is more efficient than the previous one

function sumOfTheDigitsOfHarshadNumber2(x) {
  let sum = 0

  for (let i of String(x)) {
    sum += Number(i)
  }

  if (x % sum === 0) return sum
  else return -1
}

// -------------------------
// SOLUTION 3

// TIP: This solution leverages the modulo operator to get the last digit of x

function sumOfTheDigitsOfHarshadNumber3(x) {
  let digits = x
  let sum = 0

  while (x > 0) {
    sum += x % 10 // get the last digit of x
    x = Math.floor(x / 10) // remove the last digit of x
  }

  return digits % sum === 0 ? sum : -1
}

// -------------------------
// TESTS

// 1
console.log(sumOfTheDigitsOfHarshadNumber(18)) // 9
// Explanation: The sum of digits of x is 9. 18 is divisible by 9. So 18 is a Harshad number and the answer is 9.

// 2
console.log(sumOfTheDigitsOfHarshadNumber2(18)) // 9

// 3
console.log(sumOfTheDigitsOfHarshadNumber3(18)) // 9
