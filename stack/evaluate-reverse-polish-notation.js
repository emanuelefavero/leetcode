// You are given an array of strings tokens that represents an arithmetic expression in a Reverse Polish Notation

// @see https://en.wikipedia.org/wiki/Reverse_Polish_notation

// Evaluate the expression. Return an integer that represents the value of the expression

/*
Note that:

The valid operators are '+', '-', '*', and '/'.
Each operand may be an integer or another expression.
The division between two integers always truncates toward zero.
There will not be any division by zero.
The input represents a valid arithmetic expression in a reverse polish notation.
The answer and all the intermediate calculations can be represented in a 32-bit integer
*/

function operation(a, b, operator) {
  // TIP: Math.ceil() is used to round towards 0 when the result is negative

  if (operator === '+') return a + b
  if (operator === '-') return a - b
  if (operator === '*') return a * b
  if (operator === '/') return a / b >= 0 ? Math.floor(a / b) : Math.ceil(a / b)
}

function evalRPN(tokens) {
  let stack = []
  let operators = new Set(['+', '-', '*', '/'])

  for (let value of tokens) {
    if (operators.has(value)) {
      let top = stack.pop()
      let second = stack.pop()

      // The trick is to put the second operand first in the operation
      stack.push(operation(second, top, value))
    } else {
      stack.push(Number(value))
    }
  }
  return stack.pop()
}

// ----------------------------
// SOLUTION 2

// TODO: add jsDoc (add @see tag, see up top)

function evalRPN2(tokens) {
  let stack = []
  let operation = {
    // NOTE: You can use an arrow function as a value in an object
    // TIP: Math.ceil() is used to round towards 0 when the result is negative

    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
    '*': (a, b) => a * b,
    '/': (a, b) => (a / b >= 0 ? Math.floor(a / b) : Math.ceil(a / b)),
  }

  for (let value of tokens) {
    if (value in operation) {
      let top = stack.pop()
      let second = stack.pop()

      // NOTE: You can pass arguments to a function inside an object
      // TIP: put the second operand first in the operation for the algorithm to work
      stack.push(operation[value](second, top))
    } else {
      stack.push(Number(value))
    }
  }

  return stack.pop()
}

// ----------------------------
// TESTS

console.log(evalRPN2(['2', '1', '+', '3', '*'])) // 9
// Explanation: ((2 + 1) * 3) = 9

console.log(evalRPN2(['4', '13', '5', '/', '+'])) // 6
// Explanation: (4 + (13 / 5)) = 6

console.log(evalRPN2(['3', '4', '-'])) // -1

console.log(
  evalRPN2([
    '10',
    '6',
    '9',
    '3',
    '+',
    '-11',
    '*',
    '/',
    '*',
    '17',
    '+',
    '5',
    '+',
  ])
) // 22
