// * Number of 1 Bits

// Write a function that takes the binary representation of a positive integer and returns the number of set bits it has (also known as the Hamming weight)

// TIP: A set bit refers to a bit in the binary representation of a number that has a value of 1.
// TIP: @see https://en.wikipedia.org/wiki/Hamming_weight?useskin=vector

/**
 * @param {number} n
 * @returns {number}
 */

// O(log n) time | O(1) space
function hammingWeight(n) {
  const binary = n.toString(2)
  let count = 0

  for (let i = 0; i < binary.length; i++) {
    if (binary[i] === '1') count++
  }

  return count
}

// ----------------------
// SOLUTION 2

// TIP: Using bitwise operators

function hammingWeight2(n) {
  let count = 0

  while (n !== 0) {
    if (n & 1) count++ // n & 1 will give 1 if the last bit is 1, otherwise 0
    n = n >>> 1 // shift n to the right by 1 bit (meaning divide by 2)
  }

  return count
}

// ----------------------
// SOLUTION 3

// TIP: Easiest solution to understand

function hammingWeight3(n) {
  return n.toString(2).split('0').join('').length

  // OR
  // return n.toString(2).replace(/0/g, '').length
}

// ----------------------
// TESTS

console.log(hammingWeight(11)) // 3
// Explanation: The input binary string 1011 has a total of three set bits

console.log(hammingWeight2(11)) // 3
console.log(hammingWeight3(11)) // 3
