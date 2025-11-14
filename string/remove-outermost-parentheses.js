// * Remove Outermost Parentheses

/*
A valid parentheses string is either empty "", "(" + A + ")", or A + B, where A and B are valid parentheses strings, and + represents string concatenation.

- For example, "", "()", "(())()", and "(()(()))" are all valid parentheses strings.

A valid parentheses string s is primitive if it is nonempty, and there does not exist a way to split it into s = A + B, with A and B nonempty valid parentheses strings.

Given a valid parentheses string s, consider its primitive decomposition: s = P1 + P2 + ... + Pk, where Pi are primitive valid parentheses strings.

Return s after removing the outermost parentheses of every primitive string in the primitive decomposition of s.
*/

/**
 * @param {string} s
 * @returns {string}
 */

// TIP: Use a counter to keep track of the number of open parentheses

// O(n) time | O(1) space
function removeOuterParentheses(s) {
  let result = ''
  let count = 0

  for (const char of s) {
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
// SOLUTION 2

// TIP: We can simplify the code by assigning the count to -1 and adding the char to the result only if the count is greater than 0

function removeOuterParentheses2(s) {
  let result = ''
  let count = -1

  for (const char of s) {
    if (char === '(') count++
    if (count) result += char
    if (char === ')') count--
  }

  return result
}

// -------------------------
// TESTS

// 1
console.log(removeOuterParentheses('(()())(())')) // '()()()'
// Explanation: The input string is "(()())(())", with primitive decomposition "(()())" + "(())". After removing outer parentheses of each part, this is "()()" + "()" = "()()()".
console.log(removeOuterParentheses('(()())(())(()(()))')) // '()()()()(())'
console.log(removeOuterParentheses('()()')) // ''

// 2
console.log(removeOuterParentheses2('(()())(())')) // '()()()'
console.log(removeOuterParentheses2('(()())(())(()(()))')) // '()()()()(())'
console.log(removeOuterParentheses2('()()')) // ''
