// * Replace All Digits with Characters

/*
You are given a 0-indexed string s that has lowercase English letters in its even indices and digits in its odd indices.

You must perform an operation shift(c, x), where c is a character and x is a digit, that returns the xth character after c.

For example, shift('a', 5) = 'f' and shift('x', 0) = 'x'.
For every odd index i, you want to replace the digit s[i] with the result of the shift(s[i-1], s[i]) operation.

Return s after replacing all digits. It is guaranteed that shift(s[i-1], s[i]) will never exceed 'z'.

Note that shift(c, x) is not a preloaded function, but an operation to be implemented as part of the solution.
*/

function shift(c, x) {
  let alphabet = 'abcdefghijklmnopqrstuvwxyz'
  let index = alphabet.indexOf(c)

  return alphabet[(index + x) % 26]
}

function replaceDigits(s) {
  s = s.split('')

  for (let i = 1; i < s.length; i += 2) {
    s[i] = shift(s[i - 1], parseInt(s[i]))
  }

  return s.join('')
}

// -------------------------
// SOLUTION 2

function shift2(c, x) {
  return String.fromCharCode(c.charCodeAt(0) + x)
}

function replaceDigits2(s) {
  for (let i = 1; i < s.length; i += 2) {
    let c = s[i - 1]
    let x = parseInt(s[i])

    s = s.slice(0, i) + shift2(c, x) + s.slice(i + 1)
  }

  return s
}

// -------------------------
// TESTS

// 1
console.log(replaceDigits('a1c1e1')) // 'abcdef'
/*
Explanation: The digits are replaced as follows:
- s[1] -> shift('a',1) = 'b'
- s[3] -> shift('c',1) = 'd'
- s[5] -> shift('e',1) = 'f'
*/

// 2
console.log(replaceDigits2('a1c1e1')) // 'abcdef'
