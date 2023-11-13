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
// SOLUTION 3

// TIP: This solution uses binary search

function isPerfectSquare3(num) {
  let left = 1
  let right = num

  while (left <= right) {
    let mid = Math.floor((left + right) / 2)

    // If the square of mid is equal to num, we have found the answer
    if (mid * mid === num) return true
    // If the square of mid is greater than num, we must move left
    else if (mid * mid > num) right = mid - 1
    // If the square of mid is less than num, we must move right
    else left = mid + 1
  }

  return false
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

// // 2
// console.log(isPerfectSquare2(16)) // true
// console.log(isPerfectSquare2(14)) // false

// 3
console.log(isPerfectSquare3(16)) // true
console.log(isPerfectSquare3(14)) // false
