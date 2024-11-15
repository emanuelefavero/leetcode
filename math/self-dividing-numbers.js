// * Self Dividing Numbers

/*
A self-dividing number is a number that is divisible by every digit it contains.

- For example, 128 is a self-dividing number because 128 % 1 == 0, 128 % 2 == 0, and 128 % 8 == 0.

A self-dividing number is not allowed to contain the digit zero.

Given two integers left and right, return a list of all the self-dividing numbers in the range [left, right] (both inclusive).
*/

/**
 * @param {number} left
 * @param {number} right
 * @returns {number[]}
 */

// O(n * m) time | O(n) space - where n is the range of numbers and m is the number of digits in the number
function selfDividingNumbers(left, right) {
  let result = []

  for (let i = left; i <= right; i++) {
    let digits = i.toString().split('')

    let count = 0
    for (let j = 0; j < digits.length; j++) {
      let current = Number(digits[j])
      if (current === 0) break
      if (i % current === 0) count++
    }

    if (count === digits.length) result.push(i)
  }

  return result
}

// -------------------------
// TESTS

console.log(selfDividingNumbers(1, 22)) // [1,2,3,4,5,6,7,8,9,11,12,15,22]
console.log(selfDividingNumbers(47, 85)) // [48,55,66,77]
