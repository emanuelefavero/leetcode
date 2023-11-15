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
function printReverse(string, index = 0, output = '') {
  if (index >= string.length) return output

  output = string[index] + output

  return printReverse(string, index + 1, output)
}

// ---------------------
// TESTS

// 1
printReverse('Hello') // o, l, l, e, H
printReverse('') // ''

// 2
console.log(printReverse('Hello')) // olleH
console.log(printReverse('')) // ''
