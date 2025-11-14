// * Count Symmetric Integers

/*
You are given two positive integers low and high.

An integer x consisting of 2 * n digits is symmetric if the sum of the first n digits of x is equal to the sum of the last n digits of x. Numbers with an odd number of digits are never symmetric.

Return the number of symmetric integers in the range [low, high].
*/

/**
 * @param {number} low
 * @param {number} high
 * @returns {number}
 */

// O(n) time | O(1) space
function countSymmetricIntegers(low, high) {
  let result = 0

  for (let i = low; i <= high; i++) {
    const array = i.toString().split('')
    if (array.length % 2 !== 0) continue

    const middle = Math.floor(array.length / 2)
    const left = array.slice(0, middle)
    const right = array.slice(middle)
    const leftSum = left.reduce((a, acc) => Number(a) + Number(acc), 0)
    const rightSum = right.reduce((a, acc) => Number(a) + Number(acc), 0)
    if (leftSum === rightSum) result++
  }

  return result
}

// -------------------------
// SOLUTION 2

function countSymmetricIntegers2(low, high) {
  let result = 0

  for (let num = low; num <= high; num++) {
    if (isSymmetricInteger(num)) result++
  }

  return result
}

function isSymmetricInteger(num) {
  const s = num.toString()
  if (s.length % 2 !== 0) return false

  const middle = s.length / 2
  let leftSum = 0
  let rightSum = 0
  for (let i = 0; i < middle; i++) {
    leftSum += parseInt(s[i])
    rightSum += parseInt(s[i + middle])
  }
  return leftSum === rightSum
}

// -------------------------
// TESTS

// 1
console.log(countSymmetricIntegers(1, 100)) // 9
// Explanation: There are 9 symmetric integers between 1 and 100: 11, 22, 33, 44, 55, 66, 77, 88, and 99.

// 2
console.log(countSymmetricIntegers2(1, 100)) // 9
