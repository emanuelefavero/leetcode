function myPow(x, n) {
  if (n === 0) return 1

  let pow = Math.abs(n) // always return a positive number

  // The following line efficiently divides the problem of exponentiation into smaller sub problems by exploiting the fact that `x^n` can be expressed as `(x^(n/2))^2` when `n` is even, and as `x * (x^(n-1)/2)^2` when `n` is odd
  let result =
    pow % 2 === 0 ? myPow(x * x, pow / 2) : myPow(x * x, (pow - 1) / 2) * x

  // If `n` is negative, we invert the result by dividing 1 by it
  return n < 0 ? 1 / result : result
}

// ---------------------
// SOLUTION 2

// TIP: This solution uses the built-in Math.pow() method

const myPow2 = (x, n) => Math.pow(x, n)

// ---------------------
// TESTS

// 1
console.log(myPow(2, 10)) // 1024
console.log(myPow(2, 4)) // 16
console.log(myPow2(2, 1)) // 2
console.log(myPow(2.0, -2)) // 0.25

// 2
console.log(myPow2(2, 10)) // 1024
console.log(myPow2(2, 4)) // 16
console.log(myPow2(2, 1)) // 2
console.log(myPow2(2.0, -2)) // 0.25
