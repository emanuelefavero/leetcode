// * Count the Digits That Divide a Number

// Given an integer num, return the number of digits in num that divide num.

// An integer val divides nums if nums % val == 0.

function countDigits(num) {
  let count = 0

  for (let char of num.toString()) {
    if (num % parseInt(char) === 0) count++
  }

  return count
}

// -------------------------
// TESTS

console.log(countDigits(7)) // 1
// Explanation: 7 divides itself, hence the answer is 1.
console.log(countDigits(121)) // 2
console.log(countDigits(1248)) // 4
