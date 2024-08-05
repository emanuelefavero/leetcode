// * Number of 1 Bits

// Write a function that takes the binary representation of a positive integer and returns the number of set bits it has (also known as the Hamming weight)

// TIP: A set bit refers to a bit in the binary representation of a number that has a value of 1.
// TIP: @see https://en.wikipedia.org/wiki/Hamming_weight?useskin=vector

function hammingWeight(n) {
  let binary = n.toString(2)
  let count = 0

  for (let i = 0; i < binary.length; i++) {
    if (binary[i] === '1') count++
  }

  return count
}

// ----------------------
// TESTS

console.log(hammingWeight(11)) // 3
// Explanation: The input binary string 1011 has a total of three set bits
console.log(hammingWeight(128)) // 1, 10000000 has only one set bit
