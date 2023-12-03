// * Generate Parentheses

// Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses

function generateParenthesis(n) {
  let result = []

  backtrack(n, n, '', result)

  return result
}

function backtrack(open, close, current, result) {
  // base case
  if (open === 0 && close === 0) {
    return result.push(current)
  }

  // add an open parenthesis if there are any left
  if (open > 0) {
    backtrack(open - 1, close, current + '(', result)
  }

  // add a close parenthesis if there are any left
  if (close > open) {
    backtrack(open, close - 1, current + ')', result)
  }
}

// -----------------------------
// TESTS

console.log(generateParenthesis(3))
// ["((()))","(()())","(())()","()(())","()()()"]

console.log(generateParenthesis(2)) // ["(())","()()"]
console.log(generateParenthesis(1)) // ["()"]
