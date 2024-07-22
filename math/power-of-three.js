// * Power of Three

// Given an integer n, return true if it is a power of three. Otherwise, return false.

// An integer n is a power of three, if there exists an integer x such that n == 3x.

function isPowerOfThree(n) {
  while (n > 1) n /= 3
  return n === 1
}

// -------------------------
// TESTS

console.log(isPowerOfThree(27)) // true, 27 = 3^3
console.log(isPowerOfThree(0)) // false, there is no x such that 0 == 3^x
console.log(isPowerOfThree(-1)) // false, there is no x where 3x = (-1)
