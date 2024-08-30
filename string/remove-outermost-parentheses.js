// * Remove Outermost Parentheses

/*
A valid parentheses string is either empty "", "(" + A + ")", or A + B, where A and B are valid parentheses strings, and + represents string concatenation.

- For example, "", "()", "(())()", and "(()(()))" are all valid parentheses strings.

A valid parentheses string s is primitive if it is nonempty, and there does not exist a way to split it into s = A + B, with A and B nonempty valid parentheses strings.

Given a valid parentheses string s, consider its primitive decomposition: s = P1 + P2 + ... + Pk, where Pi are primitive valid parentheses strings.

Return s after removing the outermost parentheses of every primitive string in the primitive decomposition of s.
*/

// TIP: Use a counter to keep track of the number of open parentheses

function removeOuterParentheses(s) {
  let count = 0
  let result = ''

  for (let char of s) {
    if (char === '(') {
      // If an open parenthesis is found, and there already is an open parenthesis, then add the open parenthesis
      if (count > 0) {
        result += char
      }

      count++
    } else {
      // If a closed parenthesis is found, and an open parenthesis is still open, then add the closed parenthesis
      if (count > 1) {
        result += char
      }

      count--
    }
  }

  return result
}

// -------------------------
// TESTS

console.log(removeOuterParentheses('(()())(())')) // '()()()'
// Explanation: The input string is "(()())(())", with primitive decomposition "(()())" + "(())". After removing outer parentheses of each part, this is "()()" + "()" = "()()()".
console.log(removeOuterParentheses('(()())(())(()(()))')) // '()()()()(())'
console.log(removeOuterParentheses('()()')) // ''
