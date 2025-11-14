// * Maximum Nesting Depth of the Parentheses

// Given a valid parentheses string s, return the nesting depth of s. The nesting depth is the maximum number of nested parentheses.

/**
 * @param {string} s
 * @returns {number}
 */

// O(n) time | O(1) space
function maxDepth(s) {
  let max = 0
  let count = 0

  for (const char of s) {
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
// SOLUTION 2

// TIP: This solutions uses a stack to keep track of the depth of the parentheses

// O(n) time | O(n) space
function maxDepth2(s) {
  let max = 0
  const stack = []

  for (const char of s) {
    if (char === '(') {
      stack.push(char)
    } else if (char === ')') {
      if (stack.length > max) max = stack.length
      stack.pop()
    }
  }

  return max
}

// -------------------------
// TESTS

// 1
console.log(maxDepth('(1+(2*3)+((8)/4))+1')) // 3
// Explanation: Digit 8 is inside of 3 nested parentheses in the string.

// 2
console.log(maxDepth2('(1+(2*3)+((8)/4))+1')) // 3
