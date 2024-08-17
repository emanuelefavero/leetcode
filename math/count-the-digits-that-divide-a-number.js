// * Count the Digits That Divide a Number

// Given an integer num, return the number of digits in num that divide num.

// An integer val divides nums if nums % val == 0.

/**
 * @param {number} num
 * @returns {number}
 */

// O(n) time | O(1) space
function countDigits(num) {
  let count = 0

  for (let char of num.toString()) {
    if (num % parseInt(char) === 0) count++
  }

  return count
}

// -------------------------
// SOLUTION 2

function countDigits2(num) {
  let str = num.toString()
  let count = 0

  for (let i = 0; i < str.length; i++) {
    let digit = parseInt(str[i])
    if (num % digit === 0) count++
  }

  return count
}

// -------------------------
// TESTS

// 1
console.log(countDigits(7)) // 1
// Explanation: 7 divides itself, hence the answer is 1.
console.log(countDigits(121)) // 2
console.log(countDigits(1248)) // 4

// 2
console.log(countDigits2(7)) // 1
