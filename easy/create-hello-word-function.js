// * Create Hello World Function

// Write a function createHelloWorld. It should return a new function that always returns "Hello World"

/**
 * @returns {Function}
 */

// O(1) time | O(1) space
function createHelloWorld() {
  return () => 'Hello World'
}

// -------------------------
// SOLUTION 2

// TIP: This solution uses the classic function syntax

function createHelloWorld2() {
  return function (...args) {
    return 'Hello World'
  }
}

// -------------------------
// TESTS

const f = createHelloWorld()
console.log(f()) // "Hello World"
console.log(f({}, null, 42)) // "Hello World"

// Explanation: The function returned by createHelloWorld should always return "Hello World"

const f2 = createHelloWorld()
console.log(f2()) // "Hello World"
console.log(f2({}, null, 42)) // "Hello World"
