// * Generate a String With Characters That Have Odd Counts

// Given an integer n, return a string with n characters such that each character in such string occurs an odd number of times.

// The returned string must contain only lowercase English letters. If there are multiples valid strings, return any of them.

function generateTheString(n) {
  let result = ''

  for (let i = 0; i < n - 1; i++) {
    result += 'a'
  }

  if (n % 2 === 0) {
    result += 'b'
  } else result += 'a'

  return result
}

// -------------------------
// TESTS

console.log(generateTheString(4)) // aaab
console.log(generateTheString(2)) // ab
console.log(generateTheString(3)) // aaa
console.log(generateTheString(1)) // a
