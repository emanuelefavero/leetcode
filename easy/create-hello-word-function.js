// * Create Hello World Function

// Write a function createHelloWorld. It should return a new function that always returns "Hello World"

function createHelloWorld() {
  return () => 'Hello World'
}

// -------------------------
// TESTS

const f = createHelloWorld()
console.log(f()) // "Hello World"
console.log(f({}, null, 42)) // "Hello World"

// Explanation: The function returned by createHelloWorld should always return "Hello World"
