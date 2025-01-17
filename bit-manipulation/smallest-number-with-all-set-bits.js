// * Smallest Number With All Set Bits

// You are given a positive number n.

// Return the smallest number x greater than or equal to n, such that the binary representation of x contains only set bits (a set bit refers to a bit in the binary representation of a number that has a value of 1)

function smallestNumber(n) {
  while (true) {
    let binary = n.toString(2)
    if (!binary.includes('0')) return n
    n++
  }
}

// ----------------------
// TESTS

console.log(smallestNumber(5)) // 7
// Explanation: The binary representation of 7 is "111"
console.log(smallestNumber(10)) // 15
// Explanation: The binary representation of 15 is "1111"
