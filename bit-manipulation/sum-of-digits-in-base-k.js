// * Sum of Digits in Base K

// Given an integer n (in base 10) and a base k, return the sum of the digits of n after converting n from base 10 to base k.

// After converting, each digit should be interpreted as a base 10 number, and the sum should be returned in base 10.

function sumBase(n, k) {
  return n
    .toString(k)
    .split('')
    .reduce((a, b) => parseInt(a) + parseInt(b), 0)
}

// ----------------------
// TESTS

console.log(sumBase(34, 6)) // 9
// Explanation: 34 (base 10) expressed in base 6 is 54. 5 + 4 = 9.
