// * Decode String

/*
Given an encoded string, return its decoded string.

The encoding rule is: k[encoded_string], where the encoded_string inside the square brackets is being repeated exactly k times. Note that k is guaranteed to be a positive integer.

You may assume that the input string is always valid; there are no extra white spaces, square brackets are well-formed, etc. Furthermore, you may assume that the original data does not contain any digits and that digits are only for those repeat numbers, k. For example, there will not be input like 3a or 2[4].

The test cases are generated so that the length of the output will never exceed 105.
*/

/**
 * @param {string} s
 * @returns {string}
 */

// O(n) time | O(n) space
function decodeString(s) {
  const stack = []

  for (const char of s) {
    // if the current character is not a closing bracket, push it onto the stack
    if (char !== ']') {
      stack.push(char)
      continue
    }

    let current = stack.pop()
    let string = ''

    // get the string inside the brackets
    while (current !== '[') {
      string = current + string
      current = stack.pop()
    }

    let num = ''
    current = stack.pop() // get the number

    // get the number before the brackets
    while (!isNaN(current)) {
      num = current + num
      current = stack.pop()
    }

    // push the current character back onto the stack
    stack.push(current)

    stack.push(string.repeat(Number(num))) // repeat the string num times
  }

  return stack.join('') // join the stack into a string
}

// -----------------------
// TESTS

console.log(decodeString('3[a]2[bc]')) // 'aaabcbc'
console.log(decodeString('3[a2[c]]')) // 'accaccacc'
