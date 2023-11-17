// * Print Reverse

// Return a string in reverse order using recursion

/**
 * @param {string} string
 * @param {number} index
 * @param {string} output
 * @returns {void}
 */

// O(n) time | O(n) space
function printReverse(string, index = 0, output = '') {
  if (index >= string.length) return

  printReverse(string, index + 1)
  console.log(string[index])
}

// ---------------------
// SOLUTION 2

/**
 * @param {string} string
 * @param {number} index
 * @param {string} output
 * @returns {string}
 */

// TIP: This solution returns a reversed string instead of printing it

// O(n) time | O(n) space
function printReverse2(string, index = 0, output = '') {
  if (index >= string.length) return output

  output = string[index] + output

  return printReverse2(string, index + 1, output)
}

// ---------------------
// SOLUTION 3

function printReverse3(string) {
  let output = ''

  for (let i = string.length; i <= 0; i--) {
    output += string[i]
  }

  return output
}

// ---------------------
// TESTS

// 1
printReverse('Hello') // o, l, l, e, H
printReverse('') // ''

// 2
console.log(printReverse2('Hello')) // olleH
console.log(printReverse2('')) // ''

// 3
console.log(printReverse3('Hello')) // olleH
console.log(printReverse3('')) // ''
