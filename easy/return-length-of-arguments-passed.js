// * Return Length of Arguments Passed

// TIP: This is a JavaScript specific problem

// Write a function argumentsLength that returns the count of arguments passed to it

/**
 * @param  {...any} args
 * @returns {number}
 */

// O(1) time | O(1) space
function argumentsLength(...args) {
  return args.length
}

// ---------------------
// TESTS

console.log(argumentsLength(5)) // 1
console.log(argumentsLength({}, null, '3')) // 3
