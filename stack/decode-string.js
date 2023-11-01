// * Decode String

function decodeString(s) {
  let stack = []

  for (let char of s) {
    if (char !== ']') {
      stack.push(char)
      continue
    }

    let current = stack.pop()
    let string = ''

    while (current !== '[') {
      string = current + string
      current = stack.pop()
    }

    let num = ''
    current = stack.pop() // get the number

    while (!isNaN(current)) {
      num = current + num
      current = stack.pop()
    }

    stack.push(current)

    stack.push(string.repeat(Number(num))) // repeat the string num times
  }

  return stack.join('') // join the stack into a string
}

// -----------------------
// TESTS

console.log(decodeString('3[a]2[bc]')) // 'aaabcbc'
console.log(decodeString('3[a2[c]]')) // 'accaccacc'
