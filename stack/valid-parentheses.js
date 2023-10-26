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
// TESTS

console.log(isValid('()')) // true
console.log(isValid('()[]{}')) // true
console.log(isValid('(]')) // false
console.log(isValid('(')) // false
console.log(isValid(')')) // false
console.log(isValid('(])')) // false
