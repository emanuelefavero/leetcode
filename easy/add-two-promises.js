// * Add Two Promises

// Given two promises promise1 and promise2, return a new promise. promise1 and promise2 will both resolve with a number. The returned promise should resolve with the sum of the two numbers.

async function addTwoPromises(promise1, promise2) {
  const a = await promise1
  const b = await promise2

  return a + b
}

// -------------------------
// SOLUTION 2

async function addTwoPromises2(promise1, promise2) {
  const [a, b] = await Promise.all([promise1, promise2])
  return a + b
}

// -------------------------
// TESTS

// 1
addTwoPromises(
  new Promise((resolve) => setTimeout(() => resolve(2), 20)),
  new Promise((resolve) => setTimeout(() => resolve(5), 60))
).then(console.log)

// Explanation: The two input promises resolve with the values of 2 and 5 respectively. The returned promise should resolve with a value of 2 + 5 = 7. The time the returned promise resolves is not judged for this problem.

// 2
addTwoPromises2(
  new Promise((resolve) => setTimeout(() => resolve(2), 20)),
  new Promise((resolve) => setTimeout(() => resolve(5), 60))
).then(console.log)
