// * Apply Transform Over Each Element in Array

/*
Given an integer array arr and a mapping function fn, return a new array with a transformation applied to each element.

The returned array should be created such that returnedArray[i] = fn(arr[i], i).

Please solve it without the built-in Array.map method.
*/

function map(arr, fn) {
  let result = []

  for (let i = 0; i < arr.length; i++) {
    result.push(fn(arr[i], i))
  }

  return result
}

// -------------------------
// SOLUTION 2

// TIP: Use the built-in Array.map method

function map2(arr, fn) {
  return arr.map(fn)
}

// -------------------------
// TESTS

// 1
console.log(map([1, 2, 3], (n) => n + 1)) // [2, 3, 4]
console.log(map([1, 2, 3], (n, i) => n + i)) // [1, 3, 5]
console.log(map([10, 20, 30], () => 42)) // [42, 42, 42]

// 2
console.log(map2([1, 2, 3], (n) => n + 1)) // [2, 3, 4]
console.log(map2([1, 2, 3], (n, i) => n + i)) // [1, 3, 5]
console.log(map2([10, 20, 30], () => 42)) // [42, 42, 42]
