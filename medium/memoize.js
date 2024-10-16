// * Memoize

/*
Given a function fn, return a memoized version of that function.

A memoized function is a function that will never be called twice with the same inputs. Instead it will return a cached value.

You can assume there are 3 possible input functions: sum, fib, and factorial.

sum accepts two integers a and b and returns a + b. Assume that if a value has already been cached for the arguments (b, a) where a != b, it cannot be used for the arguments (a, b). For example, if the arguments are (3, 2) and (2, 3), two separate calls should be made.
fib accepts a single integer n and returns 1 if n <= 1 or fib(n - 1) + fib(n - 2) otherwise.
factorial accepts a single integer n and returns 1 if n <= 1 or factorial(n - 1) * n otherwise.
*/

function memoize(fn) {
  const cache = {}

  return function (...args) {
    const key = JSON.stringify(args)

    if (key in cache) return cache[key]

    // callCount++
    return (cache[key] = fn(...args))
  }
}

// --------------------------
// TESTS

let callCount = 0
const sum = (a, b) => a + b
const memoizedSum = memoize(sum)
console.log(memoizedSum(2, 2)) // 4
console.log(memoizedSum(2, 2)) // 4, However sum() was not called because the same inputs were seen before
// console.log('callCount: ', callCount) // 1
console.log(memoizedSum(1, 2)) // 3
// console.log('callCount: ', callCount) // 2
