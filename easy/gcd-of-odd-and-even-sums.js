// * GCD of Odd and Even Sums

/*
You are given an integer n. Your task is to compute the GCD (greatest common divisor) of two values:

- sumOdd: the sum of the first n odd numbers.

- sumEven: the sum of the first n even numbers.

Return the GCD of sumOdd and sumEven.
*/

/**
 * @param {number} n
 * @returns {number}
 */

// O(n) time | O(1) space
function gcdOfOddEvenSums(n) {
  let sumOdd = 0
  let sumEven = 0

  for (let i = 1; i <= n * 2; i++) {
    if (i % 2 === 0) sumEven += i
    else sumOdd += i
  }

  return gcd(sumOdd, sumEven)
}

// Find greatest common divisor with Euclidean algorithm
function gcd(a, b) {
  if (b == 0) return a
  else return gcd(b, a % b)
}

// -------------------------
// SOLUTION 2

// TIP: We can simplify the problem by simply multiplying n by n and n by (n + 1) respectively to find the sums directly

// O(log(n)) time | O(1) space
function gcdOfOddEvenSums2(n) {
  let odd = n * n
  let even = n * (n + 1)

  return gcd(odd, even)
}

// -------------------------
// TESTS

// 1
console.log(gcdOfOddEvenSums(4)) // 4
console.log(gcdOfOddEvenSums(5)) // 5

// 2
console.log(gcdOfOddEvenSums2(4)) // 4
console.log(gcdOfOddEvenSums2(5)) // 5
