// * Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

/*
An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.
*/

// TIP: We will use a stack to keep track of the open brackets

function isValid(s) {
  let stack = []

  for (let char of s) {
    if (char === '(' || char === '{' || char === '[') {
      stack.push(char)
    } else {
      let last = stack.pop()

      if (
        (char === ')' && last !== '(') ||
        (char === '}' && last !== '{') ||
        (char === ']' && last !== '[')
      ) {
        return false
      }
    }
  }

  return stack.length === 0
}

// -----------------------
// SOLUTION 2

// TIP: This solution is more concise but can be harder to understand

function isValid2(s) {
  let parentheses = {
    '(': ')',
    '[': ']',
    '{': '}',
  }

  let stack = []

  for (let char of s) {
    // if the current character is an opening bracket, push it onto the stack
    if (parentheses[char]) {
      stack.push(char)
    } else {
      let last = stack.pop()

      // if the current closing bracket does not match the last opening bracket, return false
      if (char !== parentheses[last]) return false
    }
  }

  return stack.length === 0
}

// -----------------------
// TESTS

console.log(isValid('()')) // true
console.log(isValid('()[]{}')) // true
console.log(isValid('(]')) // false
console.log(isValid('(')) // false
console.log(isValid(')')) // false
console.log(isValid('(])')) // false
