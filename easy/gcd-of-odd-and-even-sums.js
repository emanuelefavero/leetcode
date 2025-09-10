// * GCD of Odd and Even Sums

/*
You are given an integer n. Your task is to compute the GCD (greatest common divisor) of two values:

- sumOdd: the sum of the first n odd numbers.

- sumEven: the sum of the first n even numbers.

Return the GCD of sumOdd and sumEven.
*/

function gcdOfOddEvenSums(n) {
  let sumOdd = 0
  let sumEven = 0

  for (let i = 1; i <= n * 2; i++) {
    if (i % 2 === 0) sumEven += i
    else sumOdd += i
  }

  // Find greatest common divisor with Euclidean algorithm
  const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b))

  return gcd(sumOdd, sumEven)
}

// -------------------------
// TESTS

console.log(gcdOfOddEvenSums(4)) // 4
console.log(gcdOfOddEvenSums(5)) // 5
