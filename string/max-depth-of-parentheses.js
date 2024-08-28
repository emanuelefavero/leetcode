// * Maximum Nesting Depth of the Parentheses

// Given a valid parentheses string s, return the nesting depth of s. The nesting depth is the maximum number of nested parentheses.

function maxDepth(s) {
  let max = 0
  let count = 0

  for (let char of s) {
    if (char === '(') {
      count++
      max = Math.max(max, count)
    } else if (char === ')') {
      count--
    }
  }

  return max
}

// -------------------------
// TESTS

console.log(maxDepth('(1+(2*3)+((8)/4))+1')) // 3
// Explanation: Digit 8 is inside of 3 nested parentheses in the string.
