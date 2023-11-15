// * Print Reverse

// Return a string in reverse order using recursion

function printReverse(string, index = 0, output = '') {
  if (index >= string.length) return

  printReverse(string, index + 1)
  console.log(string[index])
}

// ---------------------
// TESTS

printReverse('Hello') // o, l, l, e, H
printReverse('') // ''
