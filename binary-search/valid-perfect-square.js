function isPerfectSquare(num) {
  if (num === 1) return true

  let i = 2

  while (i < num) {
    if (i * i === num) return true
    i++
  }

  return false
}

console.log(isPerfectSquare(1)) // true
console.log(isPerfectSquare(4)) // true
console.log(isPerfectSquare(9)) // true
console.log(isPerfectSquare(16)) // true
console.log(isPerfectSquare(2)) // false
console.log(isPerfectSquare(14)) // false
