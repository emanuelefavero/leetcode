// * Remove Trailing Zeros From a String

// Given a positive integer num represented as a string, return the integer num without trailing zeros as a string.

function removeTrailingZeros(num) {
  for (let i = num.length - 1; i >= 0; i--) {
    if (num[i] === '0') {
      num = num.slice(0, -1)
    } else break
  }
  return num
}

// -------------------------
// TESTS

console.log(removeTrailingZeros('51230100')) // '512301'
console.log(removeTrailingZeros('123')) // '123'
