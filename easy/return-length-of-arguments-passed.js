// * Return Length of Arguments Passed

// Write a function argumentsLength that returns the count of arguments passed to it

function argumentsLength(...args) {
  return args.length
}

// ---------------------
// TESTS

console.log(argumentsLength(5)) // 1
console.log(argumentsLength({}, null, '3')) // 3
