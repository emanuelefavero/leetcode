// * Harshad Number

// An integer divisible by the sum of its digits is said to be a Harshad number. You are given an integer x. Return the sum of the digits of x if x is a Harshad number, otherwise, return -1.

function sumOfTheDigitsOfHarshadNumber(x) {
  let sum = x
    .toString()
    .split('')
    .reduce((acc, curr) => acc + parseInt(curr), 0)

  return x % sum === 0 ? sum : -1
}

// -------------------------
// TESTS

console.log(sumOfTheDigitsOfHarshadNumber(18)) // 9
// Explanation: The sum of digits of x is 9. 18 is divisible by 9. So 18 is a Harshad number and the answer is 9.
