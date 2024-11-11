// * Execute Asynchronous Functions in Parallel

/*
TIP: This is a JavaScript problem.

Given an array of asynchronous functions functions, return a new promise promise. Each function in the array accepts no arguments and returns a promise. All the promises should be executed in parallel.

promise resolves:

- When all the promises returned from functions were resolved successfully in parallel. The resolved value of promise should be an array of all the resolved values of promises in the same order as they were in the functions. The promise should resolve when all the asynchronous functions in the array have completed execution in parallel.

promise rejects:

- When any of the promises returned from functions were rejected. promise should also reject with the reason of the first rejection.
Please solve it without using the built-in Promise.all function.
*/

function promiseAll(functions) {
  return new Promise((resolve, reject) => {
    const result = []
    let count = 0

    functions.forEach((func, i) => {
      func()
        .then((value) => {
          result[i] = value
          count++

          if (count === functions.length) resolve(result)
        })
        .catch((error) => reject(error))
    })
  })
}

// --------------------------
// TESTS

promiseAll([
  () => new Promise((resolve) => setTimeout(() => resolve(5), 200)),
]).then(console.log) // [5]
/* Explanation:  
promiseAll(functions).then(console.log); // [5]
The single function was resolved at 200ms with a value of 5.
*/

promiseAll([
  () => new Promise((resolve) => setTimeout(() => resolve(1), 200)),
  () =>
    new Promise((resolve, reject) => setTimeout(() => reject('Error'), 100)),
]).catch(console.log) // Error

promiseAll([
  () => new Promise((resolve) => setTimeout(() => resolve(4), 50)),
  () => new Promise((resolve) => setTimeout(() => resolve(10), 150)),
  () => new Promise((resolve) => setTimeout(() => resolve(16), 100)),
]).then(console.log) // [4, 10, 16]
