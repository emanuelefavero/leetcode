// * Allow One Function Call

/*
Given a function fn, return a new function that is identical to the original function except that it ensures fn is called at most once.

The first time the returned function is called, it should return the same result as fn.
Every subsequent time it is called, it should return undefined.
*/

/**
 * @param {function} fn
 * @returns {function}
 */

// O(1) time | O(1) space
function once(fn) {
  let called = false

  return (...args) => {
    if (called) return undefined

    called = true
    return fn(...args)
  }
}

// ----------------------
// TESTS

let fn = (a, b, c) => a + b + c
let onceFn = once(fn)

console.log(onceFn(1, 2, 3)) // 6
console.log(onceFn(2, 3, 6)) // undefined
// Explanation: The first time onceFn is called, it calls fn with the arguments 1, 2, and 3, which returns 6. The second time onceFn is called, it returns undefined because fn has already been called once.
