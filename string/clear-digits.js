// * Clear Digits

/*
You are given a string s.

Your task is to remove all digits by doing this operation repeatedly:

Delete the first digit and the closest non-digit character to its left.
Return the resulting string after removing all digits.

Note that the operation cannot be performed on a digit that does not have any non-digit character to its left.
*/

// TIP: We can use a stack to keep track of the characters in the string. When we encounter a digit, we pop the last character from the stack (if it exists) and do not add the digit to the stack. If we encounter a non-digit character, we simply add it to the stack. At the end, we join the characters in the stack to form the resulting string.

function clearDigits(s) {
  const stack = []

  for (let c of s) {
    // If the character is a digit, we need to remove the last non-digit character from the stack
    if (c >= '0' && c <= '9') {
      if (stack.length) stack.pop()

      // If the character is not a digit, we can safely add it to the stack
    } else {
      stack.push(c)
    }
  }

  return stack.join('')
}

// -------------------------
// TESTS

console.log(clearDigits('abc')) // 'abc'
// Explanation: There is no digit in the string.
console.log(clearDigits('cb34')) // ''
// Explanation: First, we apply the operation on s[2], and s becomes "c4". Then we apply the operation on s[1], and s becomes "".
