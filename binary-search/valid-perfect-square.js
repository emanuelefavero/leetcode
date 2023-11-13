function isPerfectSquare(num) {
  if (num === 1) return true

  let i = 2

  while (i < num) {
    if (i * i === num) return true
    i++
  }

  return false
}

// ---------------------
// SOLUTION 2

// TIP: This solution uses the built-in Math.sqrt() method

function isPerfectSquare2(num) {
  return Number.isInteger(Math.sqrt(num))
}

// ---------------------
// TESTS

// 1
// console.log(isPerfectSquare(1)) // true
// console.log(isPerfectSquare(4)) // true
// console.log(isPerfectSquare(9)) // true
// console.log(isPerfectSquare(16)) // true
// console.log(isPerfectSquare(2)) // false
// console.log(isPerfectSquare(14)) // false

// 2
console.log(isPerfectSquare2(16)) // true
console.log(isPerfectSquare2(14)) // false
