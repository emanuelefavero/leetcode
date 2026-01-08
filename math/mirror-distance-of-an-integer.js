// * Mirror Distance of an Integer

/*
You are given an integer n.

Define its mirror distance as: abs(n - reverse(n))​​​​​​​ where reverse(n) is the integer formed by reversing the digits of n.

Return an integer denoting the mirror distance of n​​​​​​​.

abs(x) denotes the absolute value of x.
*/

function mirrorDistance(n) {
  const reversed = n.toString().split('').reverse().join('')
  return Math.abs(n - reversed)
}

// -------------------------
// TESTS

console.log(mirrorDistance(25)) // 27
// Explanation: reverse(25) = 52. Thus, the answer is abs(25 - 52) = 27.
console.log(mirrorDistance(10)) // 9
